import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EstrelasInterativas } from './EstrelasInterativas';

test('chama onAvaliar com a nota correta ao clicar em cada estrela', async () => {
  const user = userEvent.setup();
  const onAvaliar = jest.fn();
  render(<EstrelasInterativas onAvaliar={onAvaliar} />);

  await user.click(screen.getByLabelText('Dar nota 3'));

  expect(onAvaliar).toHaveBeenCalledTimes(1);
  expect(onAvaliar).toHaveBeenCalledWith(3);
});

test('chama onAvaliar com 5 ao clicar na quinta estrela', async () => {
  const user = userEvent.setup();
  const onAvaliar = jest.fn();
  render(<EstrelasInterativas onAvaliar={onAvaliar} />);

  await user.click(screen.getByLabelText('Dar nota 5'));

  expect(onAvaliar).toHaveBeenCalledWith(5);
});
