import { useState } from 'react';
import './App.css';
import AutoSuggest from './components/AutoSuggest.js';
import StoryList from './components/StoryList.js';

function App() {
  const [savedStories, setSavedStories] = useState([]);

  const handleSelectStory = (story) => {
    setSavedStories([...savedStories, story]);
  }

  return (
    <div className="App container py-5">
      <AutoSuggest onSelectStory={handleSelectStory} />

      <br className="my-5" />
      <h2 className="fw-bold">Saved Stories</h2>
      <StoryList stories={savedStories} />
    </div>
  );
}

export default App;
