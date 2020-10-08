import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>Home This Page</div>
      <button onClick={() => console.log('press me!!!')}>press me</button>
    </div>
  )
}

export default {
  component: HomePage
};