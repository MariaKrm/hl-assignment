import { useState } from 'react';
import './App.css';
import AutoSuggest from './components/AutoSuggest.js';
import StoryList from './components/StoryList.js';

function App() {
  const [savedStories, setSavedStories] = useState([]);

  const handleSelectStory = (story) => {
    if(!savedStories.find((item) => item.story_id === story.story_id)) {
      setSavedStories([...savedStories, story]);
    }
  };

  const handleDeleteStory = (story) => {
    setSavedStories(savedStories.filter((item) => item.story_id !== story.story_id));
  };

  return (
    <div className="App container py-5">
      <AutoSuggest onSelectStory={handleSelectStory} />

      <br className="my-5" />
      <h2 className="fw-bold">Saved Stories</h2>
      <StoryList stories={savedStories} onDeleteStory={handleDeleteStory} />
    </div>
  );
}

export default App;
