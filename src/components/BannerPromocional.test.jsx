import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BannerPromocional } from './BannerPromocional';

test('renderiza a mensagem do banner', () => {
  render(<BannerPromocional mensagem="Feirão do livro: leve 3, pague 2" />);

  expect(screen.getByText('Feirão do livro: leve 3, pague 2')).toBeInTheDocument();
});
