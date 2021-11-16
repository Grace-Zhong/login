import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router';

describe('<Header />', () => {
  it('should display HOME and LOGIN links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
})