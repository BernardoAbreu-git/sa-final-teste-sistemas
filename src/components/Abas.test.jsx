import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Abas } from './Abas';

test('mostra a descrição por padrão e alterna para avaliações ao clicar', async () => {
  const user = userEvent.setup();
  render(<Abas descricao="Ótimo livro" avaliacoes="Muito bom!" />);

  expect(screen.getByText('Ótimo livro')).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Avaliações' }));

  expect(screen.getByText('Muito bom!')).toBeInTheDocument();
  expect(screen.queryByText('Ótimo livro')).not.toBeInTheDocument();
});

test('volta para descrição ao clicar em Descrição', async () => {
  const user = userEvent.setup();
  render(<Abas descricao="Texto descrição" avaliacoes="Texto avaliações" />);

  await user.click(screen.getByRole('button', { name: 'Avaliações' }));
  expect(screen.getByText('Texto avaliações')).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Descrição' }));
  expect(screen.getByText('Texto descrição')).toBeInTheDocument();
});
