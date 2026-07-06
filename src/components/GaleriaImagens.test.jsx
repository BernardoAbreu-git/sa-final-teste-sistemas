import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GaleriaImagens } from './GaleriaImagens';

test('mostra a primeira imagem e navega para a próxima', async () => {
  const user = userEvent.setup();
  render(<GaleriaImagens imagens={['Capa', 'Contracapa', 'Lombada']} />);

  expect(screen.getByAltText('Capa')).toBeInTheDocument();

  await user.click(screen.getByLabelText('Próxima imagem'));

  expect(screen.getByAltText('Contracapa')).toBeInTheDocument();
});

test('volta para a última imagem ao clicar em anterior na primeira', async () => {
  const user = userEvent.setup();
  render(<GaleriaImagens imagens={['Capa', 'Contracapa', 'Lombada']} />);

  await user.click(screen.getByLabelText('Imagem anterior'));

  expect(screen.getByAltText('Lombada')).toBeInTheDocument();
});

test('volta ao início após passar da última imagem', async () => {
  const user = userEvent.setup();
  render(<GaleriaImagens imagens={['Capa', 'Contracapa']} />);

  await user.click(screen.getByLabelText('Próxima imagem'));
  expect(screen.getByAltText('Contracapa')).toBeInTheDocument();

  await user.click(screen.getByLabelText('Próxima imagem'));
  expect(screen.getByAltText('Capa')).toBeInTheDocument();
});
