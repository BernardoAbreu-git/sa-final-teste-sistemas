import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BadgeEstoque } from './BadgeEstoque';

test('mostra "Em estoque" quando emEstoque é true', () => {
  render(<BadgeEstoque emEstoque={true} />);

  expect(screen.getByText('Em estoque')).toBeInTheDocument();
});

test('mostra "Esgotado" quando emEstoque é false', () => {
  render(<BadgeEstoque emEstoque={false} />);

  expect(screen.getByText('Esgotado')).toBeInTheDocument();
});
