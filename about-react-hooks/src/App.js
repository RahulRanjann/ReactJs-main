import './App.css';
import GitHubApi from './Component/GitHubApi';
import { useState } from 'react';

function App() {
  // State to manage visibility of components
  return (
    <div className="big-box">
       <GitHubApi />
    </div>
  );
}

export default App;
