import React from 'react';

const Introduction = ({ name, city }) => {
  return (
    <div>
        <p>Hi, my name is <span>{name}</span>. I come from <span>{city}</span>.</p>
    </div>
  );
}

export default Introduction;