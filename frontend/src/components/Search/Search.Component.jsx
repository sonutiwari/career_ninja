import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { debounce } from "../../utilities/utilities";
import BattleComponent from "../Battle/Battle.component";
import "./Search.Component.scss";
const search = async (searchQuery, callback) => {
  return fetch(`http://localhost:8080/v1/search?search=${searchQuery}`)
    .then((resp) => resp.json())
    .then((data) => {
      callback(data);
    })
    .catch((err) => Promise.reject(err.message));
};

const debouncedSearch = debounce(search, 1000);
export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    debouncedSearch(event.target.value, setSearchResults);
    event.preventDefault();
  };

  return (
    <>
      <FormControl
        id="search-input"
        type="text"
        placeholder="enter your search term"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      {searchResults.length !== 0 ? (
        searchResults.map((searchResult) => (
          <BattleComponent key={searchResult._id} searchResult={searchResult} />
        ))
      ) : (
        <h1 className="text-danger">No results found for this search</h1>
      )}
    </>
  );
}
