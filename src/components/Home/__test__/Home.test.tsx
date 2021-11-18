import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { MemoryRouter } from 'react-router';

describe('<Home />', () => {
  it('should display hello world', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
