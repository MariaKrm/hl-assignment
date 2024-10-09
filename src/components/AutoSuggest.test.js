import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AutoSuggest from './AutoSuggest';

const mockFetch = async () => {
  return {
    ok: true,
    status: 200,
    json: async () => {
      return {
        hits: [
          { title: 'title1', story_id: '1', points: 1, author: 'author1', num_comments: 1 },
          { title: 'title2', story_id: '2', points: 2, author: 'author2', num_comments: 2 }
        ]
      };
    }
  };
};

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads results and displays them', async () => {
  render(<AutoSuggest />);

  const searchInput = screen.getByLabelText('Search');
  act(() => {
    userEvent.type(searchInput, 'test');
  });

  await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));

  expect(screen.getByText('title1')).toBeInTheDocument();
  expect(screen.getByText('title2')).toBeInTheDocument();
});

test('does not load results if less than 3 characters are typed', async () => {
  render(<AutoSuggest />);

  const searchInput = screen.getByLabelText('Search');
  act(() => {
    userEvent.type(searchInput, 'a');
  });

  expect(window.fetch).toHaveBeenCalledTimes(0);

  expect(screen.queryByText('title1')).toBeNull();
  expect(screen.queryByText('title2')).toBeNull();
});
