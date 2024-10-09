import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search input', () => {
  render(<App />);
  const searchElement = screen.getByLabelText('Search');
  expect(searchElement).toBeInTheDocument();
});

test('renders saved stories list', () => {
  render(<App />);
  const storiesElement = screen.getByText('Saved Stories');
  expect(storiesElement).toBeInTheDocument();
});
