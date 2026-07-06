import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Cabecalho } from './Cabecalho';

test('renderiza o logo e os links de navegação', () => {
  render(
    <MemoryRouter>
      <Cabecalho quantidadeCarrinho={3} />
    </MemoryRouter>
  );

  expect(screen.getByText('Página Viva')).toBeInTheDocument();
  expect(screen.getByText('Início')).toBeInTheDocument();
  expect(screen.getByText('Contato')).toBeInTheDocument();
  expect(screen.getByText('Carrinho (3)')).toBeInTheDocument();
});
