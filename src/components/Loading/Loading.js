import React from 'react';

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry, unable to load the page</div>;
  }
  return null;
};

export default Loading;
