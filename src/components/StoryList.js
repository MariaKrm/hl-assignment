import StoryItem from './StoryItem.js';

function StoryList({stories, onSelectStory, onDeleteStory}) {
  return (
    <ul className="list-group">
      {
        stories.map((item) =>
          <li key={item.story_id} className="list-group-item autosuggest-item">
            <StoryItem
              title={item.title}
              points={item.points}
              author={item.author}
              comments={item.num_comments}
              onClick={onSelectStory ? () => onSelectStory(item) : null}
              onDelete={onDeleteStory ? () => onDeleteStory(item) : null}
            />
          </li>
        )
      }
    </ul>
  );
}

export default StoryList;
