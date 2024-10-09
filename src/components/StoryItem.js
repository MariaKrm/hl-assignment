function StoryItem({title, points, author, comments, onClick}) {
  return (
    <div className="p-1" onClick={onClick}>
      <p className="fw-bold mb-1">{title}</p>
      <span className="text-secondary">{points} points | by {author} | {comments} comments</span>
    </div>
  );
}

export default StoryItem;
