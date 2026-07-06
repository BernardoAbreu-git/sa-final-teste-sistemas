import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TagCategoria } from './TagCategoria';

test('renderiza o texto da categoria', () => {
  render(<TagCategoria categoria="Clássicos" />);

  expect(screen.getByText('Clássicos')).toBeInTheDocument();
});
