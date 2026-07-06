import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Acordeao } from './Acordeao';

test('começa fechado e exibe o conteúdo ao clicar', async () => {
  const user = userEvent.setup();
  render(<Acordeao titulo="Política de trocas" conteudo="Troque em até 7 dias." />);

  expect(screen.getByText('Política de trocas')).toBeInTheDocument();
  expect(screen.queryByText('Troque em até 7 dias.')).not.toBeInTheDocument();

  await user.click(screen.getByText('Política de trocas'));

  expect(screen.getByText('Troque em até 7 dias.')).toBeInTheDocument();
});

test('esconde o conteúdo ao clicar novamente', async () => {
  const user = userEvent.setup();
  render(<Acordeao titulo="Política" conteudo="Conteúdo" />);

  await user.click(screen.getByText('Política'));
  expect(screen.getByText('Conteúdo')).toBeInTheDocument();

  await user.click(screen.getByText('Política'));
  expect(screen.queryByText('Conteúdo')).not.toBeInTheDocument();
});
