import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PrecoEtiqueta } from './PrecoEtiqueta';

test('formata e exibe o valor em reais', () => {
  render(<PrecoEtiqueta valor={49.9} />);

  expect(screen.getByText('R$ 49,90')).toBeInTheDocument();
});
