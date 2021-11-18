import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LoginForm from '../components/LoginForm';
import * as apiUtils from '../../../utils/apiUtils';
import { AxiosPromise } from 'axios';
import { act } from 'react-dom/test-utils';

describe('<LoginForm />', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render login form', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/User Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
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
    fireEvent.click(screen.getByText(/Submit/i));
    expect(await screen.findByText(/Username cannot be empty/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password cannot be empty/i)).toBeInTheDocument();
  });

  // it('should call setOpenSuccessMsg() if mockapi return 200', async () => {
  //   const login = jest
  //     .spyOn(apiUtils, 'login')
  //     .mockResolvedValue({ status: 200 } as unknown as AxiosPromise);
  //   render(
  //     <MemoryRouter>
  //       <LoginForm />
  //     </MemoryRouter>
  //   );
  //   act(() => {
  //     fireEvent.change(screen.getByPlaceholderText(/User Name/i), {
  //       target: { value: 'user' },
  //     });
  //     fireEvent.change(screen.getByPlaceholderText(/Password/i), {
  //       target: { value: 'user' },
  //     });
  //     fireEvent.click(screen.getByText(/Submit/i));
  //   });
  //   await waitFor(() => expect(screen.getByText(/Login successful!/i)).toBeInTheDocument());
  //   // await waitFor(() => expect(login).toBeCalled());
  //   // await waitFor(() => expect(setOpenSuccessMsg).toBeCalled());
  // });
});
