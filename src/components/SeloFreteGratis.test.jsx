import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SeloFreteGratis } from './SeloFreteGratis';

test('renderiza a mensagem de frete grátis', () => {
  render(<SeloFreteGratis />);

  expect(screen.getByText('Frete grátis acima de R$ 150,00')).toBeInTheDocument();
});
