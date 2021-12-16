import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import store from "./util";

function App() {
  return (
    <div>
      <HomeComponent store={store}/>
    </div>
  );
}

export default App;
