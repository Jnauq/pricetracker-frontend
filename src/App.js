import React from 'react';
import AddItem from './components/addItem'
import ProdList from './components/productList'
import Refresh from './components/refreshList'
import './App.css';

function App() {
  return (
    <div className="app">
      <AddItem/>
      <Refresh/>
      <ProdList/>
    </div>
  );
}

export default App;
