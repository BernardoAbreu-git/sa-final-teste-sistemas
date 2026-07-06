import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BarraBusca } from './BarraBusca';

test('chama onBuscar com o texto digitado ao enviar', async () => {
  const user = userEvent.setup();
  const onBuscar = jest.fn();
  render(<BarraBusca onBuscar={onBuscar} />);

  const input = screen.getByLabelText('Buscar produtos');
  await user.type(input, 'Dom Casmurro');
  await user.click(screen.getByText('Buscar'));

  expect(onBuscar).toHaveBeenCalledTimes(1);
  expect(onBuscar).toHaveBeenCalledWith('Dom Casmurro');
});
