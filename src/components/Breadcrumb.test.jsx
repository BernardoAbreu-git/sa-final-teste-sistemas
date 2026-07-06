import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';

test('renderiza o link Início e os níveis do caminho', () => {
  render(
    <MemoryRouter>
      <Breadcrumb caminho={['Clássicos', 'Dom Casmurro']} />
    </MemoryRouter>
  );

  expect(screen.getByText('Início')).toBeInTheDocument();
  expect(screen.getByText((content) => content.includes('Clássicos'))).toBeInTheDocument();
  expect(screen.getByText((content) => content.includes('Dom Casmurro'))).toBeInTheDocument();
  expect(screen.getByLabelText('Trilha de navegação')).toBeInTheDocument();
});
