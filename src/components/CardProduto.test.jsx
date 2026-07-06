import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardProduto } from './CardProduto';

test('renderiza o nome e o preço do produto', () => {
  render(<CardProduto nome="Dom Casmurro" preco={39.9} />);

  expect(screen.getByRole('heading', { name: 'Dom Casmurro' })).toBeInTheDocument();
  expect(screen.getByText('R$ 39,90')).toBeInTheDocument();
});
