import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { IndicadorParcelas } from './IndicadorParcelas';

test('renderiza o parcelamento com valor padrão de 12x', () => {
  render(<IndicadorParcelas preco={120} />);

  expect(screen.getByText('em até 12x de R$ 10.00')).toBeInTheDocument();
});

test('renderiza com número personalizado de vezes', () => {
  render(<IndicadorParcelas preco={100} vezes={6} />);

  expect(screen.getByText('em até 6x de R$ 16.67')).toBeInTheDocument();
});
