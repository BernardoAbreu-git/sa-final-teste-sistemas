import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BotaoAdicionarCarrinho } from './BotaoAdicionarCarrinho';

test('chama onAdicionar ao clicar no botão', async () => {
  const user = userEvent.setup();
  const onAdicionar = jest.fn();
  render(<BotaoAdicionarCarrinho onAdicionar={onAdicionar} />);

  await user.click(screen.getByText('Adicionar ao carrinho'));

  expect(onAdicionar).toHaveBeenCalledTimes(1);
});
