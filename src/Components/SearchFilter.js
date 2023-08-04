// SearchFilter.js
import React from 'react';

const SearchFilter = ({ data, searchTerm }) => {
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {filteredData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          {/* Add other fields from the item object as needed */}
        </div>
      ))}
    </div>
  );
};

export default SearchFilter;
