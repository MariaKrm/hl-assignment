import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StoryItem from './StoryItem';

test('renders an item with text passed by props', () => {
  render(
    <StoryItem title="title" points="5" author="author" comments="2" />
  );

  expect(screen.getByText('title')).toBeInTheDocument();
  expect(screen.getByText(/5 points/)).toBeInTheDocument();
  expect(screen.getByText(/by author/)).toBeInTheDocument();
  expect(screen.getByText(/2 comments/)).toBeInTheDocument();
});

test('calls callback when clicked', () => {
  const handleClick = jest.fn();

  render(
    <StoryItem title="title" onClick={handleClick} />
  );

  const storyElement = screen.getByText('title');
  userEvent.click(storyElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders a delete button when onDelete is passed', () => {
  const handleClick = jest.fn();

  render(
    <StoryItem title="title" onDelete={handleClick} />
  );

  const deleteButton = screen.getByText('Delete');
  expect(deleteButton).toBeInTheDocument();
});

test('does not render a delete button when onDelete is not passed', () => {
  render(
    <StoryItem title="title" />
  );

  const deleteButton = screen.queryByText('Delete');
  expect(deleteButton).toBeNull();
});

test('calls callback when clicked', () => {
  const handleClick = jest.fn();

  render(
    <StoryItem title="title" onDelete={handleClick} />
  );

  const deleteButton = screen.getByText('Delete');
  userEvent.click(deleteButton);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
