import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltroPreco } from './FiltroPreco';

test('chama onFiltrar com "ate-100" ao clicar no primeiro botão', async () => {
  const user = userEvent.setup();
  const onFiltrar = jest.fn();
  render(<FiltroPreco onFiltrar={onFiltrar} />);

  await user.click(screen.getByText('Até R$ 100'));

  expect(onFiltrar).toHaveBeenCalledTimes(1);
  expect(onFiltrar).toHaveBeenCalledWith('ate-100');
});

test('chama onFiltrar com "acima-100" ao clicar no segundo botão', async () => {
  const user = userEvent.setup();
  const onFiltrar = jest.fn();
  render(<FiltroPreco onFiltrar={onFiltrar} />);

  await user.click(screen.getByText('Acima de R$ 100'));

  expect(onFiltrar).toHaveBeenCalledTimes(1);
  expect(onFiltrar).toHaveBeenCalledWith('acima-100');
});
