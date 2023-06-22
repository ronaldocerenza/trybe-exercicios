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

it('Teste se, ao clicar no link About', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'About' });
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const textAbout = screen.getByRole('heading', { name: /about/i });
  expect(textAbout).toBeInTheDocument();
});

it('Teste se, ao tentar acessar uma rota inexistente', () => {
  const { history } = renderWithRouter(<App />);

  history.push('/test');
  const { pathname } = history.location;
  expect(pathname).toBe('/test');
});
