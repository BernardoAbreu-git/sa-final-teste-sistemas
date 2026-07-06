import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormularioNewsletter } from './FormularioNewsletter';

test('chama onInscrever com o e-mail digitado ao enviar', async () => {
  const user = userEvent.setup();
  const onInscrever = jest.fn();
  render(<FormularioNewsletter onInscrever={onInscrever} />);

  const input = screen.getByLabelText('E-mail');
  await user.type(input, 'teste@email.com');
  await user.click(screen.getByText('Inscrever'));

  expect(onInscrever).toHaveBeenCalledTimes(1);
  expect(onInscrever).toHaveBeenCalledWith('teste@email.com');
});
