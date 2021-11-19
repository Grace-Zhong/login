import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('<Header />', () => {
  it('should display HOME and OUTER buttons', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Outer')).toBeInTheDocument();
  });

  it('should click outer button and render subMenu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('Outer'));
    expect(screen.getByText(/InnerOne/i)).toBeInTheDocument();
    userEvent.click(screen.getByText('Home'));
  });

  it('should click subMenu and close subMenu', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText('Outer'));
    userEvent.click(screen.getByText(/innerOne/i));
    await waitFor(() => expect(screen.queryByText(/innerOne/i)).not.toBeInTheDocument());
  });
});
