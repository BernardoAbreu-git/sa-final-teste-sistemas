import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SeloDesconto } from './SeloDesconto';

test('renderiza o percentual de desconto', () => {
  render(<SeloDesconto percentual={15} />);

  expect(screen.getByText('-15%')).toBeInTheDocument();
});
