// 1)
function solution(N) {
  return N % 2
    ? new Array(N).fill('a').join('')
    : new Array(N - 1).fill('a').join('') + 'b';
}

// 2)
import React from 'react';
import classnames from 'classnames';
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

const searchFn = (queryParam, setResults) => {
  axios
    .get(ITEMS_API_URL, {
      params: {
        q: queryParam,
      },
    })
    .then(({ data }) => {
      const { totalItems, items } = data;
      setResults(totalItems ? items.map(i => i.volumeInfo.title) : []);
    });
};

const debouncedSearch = lodash.debounce(searchFn, DEBOUNCE_DELAY);

export default function Autocomplete() {
  const [results, setResults] = React.useState([]);
  const onSerach = v => {
    const search = debouncedSearch;
    if (!v) {
      debouncedSearch.cancel();
      setResults([]);
    } else {
      search(v, setResults);
    }
  };

  return (
    <div className="wrapper">
      <div className="control">
        <input
          type="text"
          className="input"
          onKeyDown={e => (e.target.value === 'Enter' ? onSerach(value) : null)}
        />
      </div>
      {results.length && (
        <div className="list is-hoverable">
          {results.map(result => (
            <a className="list-item" onClick={() => alert(result)}>
              {result}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
