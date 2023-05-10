import React from 'react';

const Space = ({ size }) => {
  const spacing = `${size}px`;

  return <div style={{ marginTop: spacing }} />;
};

export default Space;
