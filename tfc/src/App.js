import React from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div className="App">
      <AddStudent />
      <Students />
    </div>
  );
}

export default App;
