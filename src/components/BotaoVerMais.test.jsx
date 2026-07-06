import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BotaoVerMais } from './BotaoVerMais';

test('começa fechado e exibe o texto ao clicar em "Ver mais"', async () => {
  const user = userEvent.setup();
  render(<BotaoVerMais texto="Conteúdo extra" />);

  expect(screen.getByText('Ver mais')).toBeInTheDocument();
  expect(screen.queryByText('Conteúdo extra')).not.toBeInTheDocument();

  await user.click(screen.getByText('Ver mais'));

  expect(screen.getByText('Conteúdo extra')).toBeInTheDocument();
  expect(screen.getByText('Ver menos')).toBeInTheDocument();
});

test('esconde o texto ao clicar em "Ver menos"', async () => {
  const user = userEvent.setup();
  render(<BotaoVerMais texto="Conteúdo" />);

  await user.click(screen.getByText('Ver mais'));
  expect(screen.getByText('Conteúdo')).toBeInTheDocument();

  await user.click(screen.getByText('Ver menos'));
  expect(screen.queryByText('Conteúdo')).not.toBeInTheDocument();
});
