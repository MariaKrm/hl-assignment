function StoryItem({title, points, author, comments, onClick, onDelete}) {
  return (
    <div className="story-item row align-items-center justify-content-between p-1">
      <div className="col" onClick={onClick || (() => {})}>
        <p className="fw-bold mb-1">{title}</p>
        <span className="text-secondary">{points} points | by {author} | {comments} comments</span>
      </div>

      {onDelete &&
        <div className="col text-end">
          <button className="delete-button btn btn-link" onClick={onDelete}>
            <strong>Delete</strong>
          </button>
        </div>
      }
    </div>
  );
}

export default StoryItem;
