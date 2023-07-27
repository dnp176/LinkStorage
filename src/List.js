import React from 'react';

const List = ({ data }) => {
  return (
    <div>
      <h2>List of items:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name}, <strong>Link:</strong> {item.link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
