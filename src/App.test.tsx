import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should display header', () => {
    render(<App />);
    expect(screen.getByRole('button', {name: /home/i})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
  });
});
