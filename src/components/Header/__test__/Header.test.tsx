import React from 'react';
import { render, screen } from '@testing-library/react';
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
    screen.debug(undefined, 3000);
  });

  // it('should click space and not render submenu', () => {
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>
  //   );
  //   userEvent.click(screen.getByText('Outter'));
  //   // userEvent.click(screen.getByText('Outter'));
  //   // userEvent.click(screen.getByText('Home'));
  //   screen.debug(undefined, 30000);
  //   expect(screen.queryByText(/InnerOne/i)).not.toBeInTheDocument();
  //   // expect(screen.queryByText(/InnerOne/i)).toHaveStyle("display: none");
  // });
});
