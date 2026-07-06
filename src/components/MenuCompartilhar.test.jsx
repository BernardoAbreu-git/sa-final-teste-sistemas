import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuCompartilhar } from './MenuCompartilhar';

test('começa fechado e exibe as opções ao clicar', async () => {
  const user = userEvent.setup();
  render(<MenuCompartilhar />);

  expect(screen.getByText('Compartilhar')).toBeInTheDocument();
  expect(screen.queryByText('Copiar link')).not.toBeInTheDocument();
  expect(screen.queryByText('WhatsApp')).not.toBeInTheDocument();
  expect(screen.queryByText('E-mail')).not.toBeInTheDocument();

  await user.click(screen.getByText('Compartilhar'));

  expect(screen.getByText('Copiar link')).toBeInTheDocument();
  expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  expect(screen.getByText('E-mail')).toBeInTheDocument();
});

test('esconde as opções ao clicar novamente', async () => {
  const user = userEvent.setup();
  render(<MenuCompartilhar />);

  await user.click(screen.getByText('Compartilhar'));
  expect(screen.getByText('Copiar link')).toBeInTheDocument();

  await user.click(screen.getByText('Compartilhar'));
  expect(screen.queryByText('Copiar link')).not.toBeInTheDocument();
});
