import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StoryList from './StoryList';

const mockChildComponent = jest.fn();
jest.mock("./StoryItem", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

test('renders a list item for each story', () => {
  const stories = [
    { title: 'title1', story_id: '1' },
    { title: 'title2', story_id: '2' },
    { title: 'title3', story_id: '3' }
  ];

  render(
    <StoryList stories={stories} />
  );

  expect(mockChildComponent).toHaveBeenCalledTimes(3);
});

test('renders a list item with the story details', () => {
  const stories = [
    { story_id: '1', title: 'title', points: 2, author: 'author', num_comments: 5 }
  ];

  render(
    <StoryList stories={stories} />
  );

  expect(mockChildComponent).toHaveBeenCalledWith(expect.objectContaining({
    title: 'title',
    points: 2,
    author: 'author',
    comments: 5
  }));
})
