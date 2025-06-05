import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecommendationsForm from '../RecommendationsForm';

jest.mock('axios', () => ({ post: jest.fn() }));
// eslint-disable-next-line import/first
import axios from 'axios';

it('envia dados e exibe a resposta', async () => {
  axios.post.mockResolvedValue({ data: { ok: true } });
  render(<RecommendationsForm />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'teste' } });
  fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith(
      'http://127.0.0.1:8000/hedge/recommendations',
      { data: 'teste' }
    );
  });

  expect(
    await screen.findByText(/"ok": true/)
  ).toBeInTheDocument();
});
