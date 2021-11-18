import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
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

  // it('should click space and not render submenu', async () => {
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>
  //   );
  //   act(() => {
  //     userEvent.click(screen.getByText('Outter'));
  //     userEvent.click(screen.getByText('Outter'));
  //   })
  //   userEvent.click(screen.getByText('Outter'));
  //   screen.debug(undefined, 3000)
  //   await waitFor(() => expect(screen.queryByText(/InnerOne/i)).not.toBeInTheDocument());
  // });
});
