import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

it('Teste que a aplicação renderiza corretamente em seu estado inicial', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Search Digimon',
  });
  expect(homeTitle).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: 'About' });
  const searchLink = screen.getByRole('link', { name: 'Search Digimon' });
  expect(aboutLink).toBeInTheDocument();
  expect(searchLink).toBeInTheDocument();
});
