import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div>Ops... Page not found!!!</div>
  )
}

export default {
  component: NotFoundPage
};