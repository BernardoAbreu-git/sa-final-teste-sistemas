import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleFavorito } from './ToggleFavorito';

test('começa como "Favoritar" e alterna ao clicar', async () => {
  const user = userEvent.setup();
  render(<ToggleFavorito />);

  expect(screen.getByText('Favoritar')).toBeInTheDocument();

  await user.click(screen.getByText('Favoritar'));

  expect(screen.getByText('Favorito ✓')).toBeInTheDocument();
});

test('alterna entre os dois estados a cada clique', async () => {
  const user = userEvent.setup();
  render(<ToggleFavorito />);

  await user.click(screen.getByText('Favoritar'));
  expect(screen.getByText('Favorito ✓')).toBeInTheDocument();

  await user.click(screen.getByText('Favorito ✓'));
  expect(screen.getByText('Favoritar')).toBeInTheDocument();
});
