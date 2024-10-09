import StoryItem from './StoryItem.js';

function StoryList({stories}) {
  return (
    <ul className="list-group">
      {
        stories.map((item) =>
          <li key={item.story_id} className="list-group-item">
            <StoryItem title={item.title} points={item.points} author={item.author} comments={item.num_comments} />
          </li>
        )
      }
    </ul>
  );
}

export default StoryList;
