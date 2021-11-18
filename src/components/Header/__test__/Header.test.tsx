import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('<Header />', () => {
  it('should display HOME and OUTTER buttons', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Outter')).toBeInTheDocument();
  });

  it('should click outter button and render submenu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('Outter'));
    expect(screen.getByText(/InnerOne/i)).toBeInTheDocument();
    userEvent.click(screen.getByText('Home'));
  });

  it('should click submenu and close submenu', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('Outter'));
    userEvent.click(screen.getByText(/innerone/i));
    await waitFor(() => expect(screen.queryByText(/innerone/i)).not.toBeInTheDocument());
  });
});
