import React from 'react';
import AddItem from './components/addItem'
import ProdList from './components/productList'
import './App.css';

function App() {
  return (
    <div className="app">
      <AddItem/>
      <ProdList/>
    </div>
  );
}

export default App;
