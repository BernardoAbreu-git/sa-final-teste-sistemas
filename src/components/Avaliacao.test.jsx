import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Avaliacao } from './Avaliacao';

test('renderiza a quantidade de estrelas correspondente à nota', () => {
  render(<Avaliacao nota={4} />);

  expect(screen.getByLabelText('Nota 4 de 5')).toBeInTheDocument();
});

test('renderiza estrelas vazias quando a nota é 0', () => {
  render(<Avaliacao nota={0} />);

  expect(screen.getByLabelText('Nota 0 de 5')).toBeInTheDocument();
});
