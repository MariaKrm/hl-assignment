import { useState } from 'react';
import StoryList from './StoryList.js';

function AutoSuggest({onSelectStory}) {
  const [searchText, setSearchText] = useState('');
  const [stories, setStories] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const makeRequest = async (text) => {
    try {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=story&query=${text}`);
      const body = await response.json();
      setStories(body.hits);
    } catch (error) {
      console.log('Error fetching results', error);
      setStories([]);
    }
  }

  const handleInputChange = (event) => {
    const value = event.target.value;
    clearTimeout(searchTimer);
    if(value.length > 2) {
      setSearchTimer(setTimeout(() => makeRequest(value), 300));
    } else {
      setStories([]);
    }

    setSearchText(event.target.value);
  }

  const handleSelectStory = (story) => {
    onSelectStory(story);
    setIsFocused(false);
  }

  return (
    <div className="autosuggest-container mx-auto">
      <div className="form-group text-start">
        <label htmlFor="autosuggest-input" className="form-label">Search</label>
        <input
          id="autosuggest-input"
          className="form-control"
          value={searchText}
          type="text"
          placeholder="Search title"
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
        />
      </div>

      {searchText && isFocused &&
        <div className="autosuggest-suggestions">
          <StoryList stories={stories} onSelectStory={handleSelectStory} />
        </div>
      }
    </div>
  );
}

export default AutoSuggest;
