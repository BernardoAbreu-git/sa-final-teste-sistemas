import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Rodape } from './Rodape';

test('renderiza o texto de direitos autorais', () => {
  render(<Rodape />);

  expect(screen.getByText('Página Viva · Todos os direitos reservados.')).toBeInTheDocument();
});
