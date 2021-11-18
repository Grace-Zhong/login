import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LoginForm from '../components/LoginForm';

describe('<Login />', () => {
  const setOpenSuccessMsg = jest.fn();
  const setOpenFailMsg = jest.fn();

  it('should render login form', () => {
    render(
      <MemoryRouter>
        <LoginForm
          setOpenSuccessMsg={setOpenSuccessMsg}
          setOpenFailMsg={setOpenFailMsg}
        />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/User Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
});
