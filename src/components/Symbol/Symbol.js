import React, { Component } from 'react';

const Symbol = props => {
  return (
    <div className="symbol">
      <p>{props.label}</p>
    </div>
  );
};

export default Symbol;
