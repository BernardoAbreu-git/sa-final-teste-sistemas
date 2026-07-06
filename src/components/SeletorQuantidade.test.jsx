import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SeletorQuantidade } from './SeletorQuantidade';

test('começa com quantidade 1 e aumenta ao clicar em +', async () => {
  const user = userEvent.setup();
  render(<SeletorQuantidade />);

  expect(screen.getByText('Quantidade: 1')).toBeInTheDocument();

  await user.click(screen.getByLabelText('Aumentar quantidade'));

  expect(screen.getByText('Quantidade: 2')).toBeInTheDocument();
});

test('não diminui abaixo de 1', async () => {
  const user = userEvent.setup();
  render(<SeletorQuantidade />);

  await user.click(screen.getByLabelText('Diminuir quantidade'));

  expect(screen.getByText('Quantidade: 1')).toBeInTheDocument();
});

test('diminui a quantidade ao clicar em −', async () => {
  const user = userEvent.setup();
  render(<SeletorQuantidade />);

  await user.click(screen.getByLabelText('Aumentar quantidade'));
  await user.click(screen.getByLabelText('Aumentar quantidade'));
  expect(screen.getByText('Quantidade: 3')).toBeInTheDocument();

  await user.click(screen.getByLabelText('Diminuir quantidade'));
  expect(screen.getByText('Quantidade: 2')).toBeInTheDocument();
});
