import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="form-control w-50 mb-3"
      type="text"
      name="query"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBar;