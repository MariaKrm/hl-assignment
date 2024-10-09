import { useState } from 'react';

function AutoSuggest() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="w-50 mx-auto">
      <div className="form-group text-start">
        <label for="autosuggest-input" className="form-label">Search</label>
        <input
          id="autosuggest-input"
          className="form-control"
          value={searchText}
          type="text"
          placeholder="Search title"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AutoSuggest;
