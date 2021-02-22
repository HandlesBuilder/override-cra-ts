import React, { useEffect } from 'react';
import { Tag } from 'antd';
import logo from './logo.svg';
import './App.less';

function App() {
  useEffect(() => {
    // fetch('http://jsonplaceholder.typicode.com/users/1')
    fetch('/api/users/1')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {};
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <Tag color='#f50'>Edit</Tag> <code>src/App.tsx</code> and save to
          reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
