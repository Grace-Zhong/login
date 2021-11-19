import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LoginForm from '../components/LoginForm';
import * as apiUtils from '../../../utils/apiUtils';
import { AxiosPromise } from 'axios';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import * as history from 'react-router';

describe('<LoginForm /> render elements', () => {
  it('should render login form', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/User Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cancel/i })).toBeInTheDocument();
  });

  it('should display error message when username or password is empty', async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/User Name/i), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(
      await screen.findByText(/Username cannot be empty/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Password cannot be empty/i)
    ).toBeInTheDocument();
  });

  it('should redirect to Home page if click cancel', async () => {
    const navigate = jest.fn();
    jest.spyOn(history, 'useNavigate').mockReturnValue(navigate);
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /Cancel/i }));
    expect(navigate).toBeCalledWith('/');
  });
});

describe('<LoginForm /> call apis', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should display/hide Login successful! if mockApi return 200', async () => {
    jest
      .spyOn(apiUtils, 'login')
      .mockResolvedValue({ status: 200 } as unknown as AxiosPromise);
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    act(() => {
      fireEvent.change(screen.getByPlaceholderText(/User Name/i), {
        target: { value: 'user' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Password/i), {
        target: { value: 'user' },
      });
    });
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() =>
      expect(screen.getByText(/Login successful!/i)).toBeInTheDocument()
    );
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() =>
      expect(screen.queryByText(/Login successful!/i)).not.toBeInTheDocument()
    );
  });

  it('should display Incorrect username or password! if mockApi return 400', async () => {
    jest.spyOn(apiUtils, 'login').mockRejectedValue({
      response: { status: 400 },
    } as unknown as AxiosPromise);
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    act(() => {
      fireEvent.change(screen.getByPlaceholderText(/User Name/i), {
        target: { value: 'abc' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Password/i), {
        target: { value: 'abc' },
      });
    });
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() =>
      expect(screen.getByText(/incorrect/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByText(/incorrect/i)).not.toBeVisible()
    );
  });

  it('should do nothing if mockApi not return 200', async () => {
    const login = jest.spyOn(apiUtils, 'login').mockResolvedValue({
      response: { status: 300 },
    } as unknown as AxiosPromise);
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    act(() => {
      fireEvent.change(screen.getByPlaceholderText(/User Name/i), {
        target: { value: 'abc' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Password/i), {
        target: { value: 'abc' },
      });
    });
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(login).not.toBeCalled());
  });
});
