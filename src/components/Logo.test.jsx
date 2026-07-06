import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

test('renderiza o nome da loja', () => {
  render(<Logo />);

  expect(screen.getByText('Página Viva')).toBeInTheDocument();
});
