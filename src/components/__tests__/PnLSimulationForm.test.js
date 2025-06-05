import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PnLSimulationForm from '../PnLSimulationForm';

jest.mock('axios', () => ({ post: jest.fn() }));
// eslint-disable-next-line import/first
import axios from 'axios';

it('envia dados e mostra o resultado', async () => {
  axios.post.mockResolvedValue({ data: { resultado: 123 } });
  render(<PnLSimulationForm />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'input' } });
  fireEvent.click(screen.getByRole('button', { name: /simular/i }));

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith(
      'http://127.0.0.1:8000/pnl/simulate',
      { data: 'input' }
    );
  });

  expect(
    await screen.findByText(/"resultado": 123/)
  ).toBeInTheDocument();
});
