import React, { Component } from 'react';
import AddItem from './components/addItem'
import ProdList from './components/productList'
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
        products : [],
        errorMsg : '',
    }
  }

  componentDidMount() {
    axios.get('https://amazon-api-82020.herokuapp.com/api/products')
    .then(response => {
        this.setState({ products: response.data })
    })
    .catch(error => {
        this.setState({ errorMsg: 'Error retrieving data' })
    })
  }

  handleUpdate = () => {
    axios.get('https://amazon-api-82020.herokuapp.com/api/update')
    .then( response => {
        this.setState({ products: response.data })
    })
    .catch(error => {
        this.setState({ errorMsg: 'Error retrieving data' })
    })
  }

  handleRemove = (id) => {
    this.setState({ products: [...this.state.products.filter(product => product.id !== id)] })
    axios.delete(`https://amazon-api-82020.herokuapp.com/api/remove/${id}`)
    .then( response => {
        this.setState({ products: response.data })
    })
    .catch(error => {
        this.setState({ errorMsg: 'Error removing item' })
    })
  }

  handleAdd = (url) => {
    axios.post('https://amazon-api-82020.herokuapp.com/api/addNew', { prodUrl: `${url}` })
    .then( response => {
        this.setState({ products: response.data })
    })
    .catch(error => {
        this.setState({ errorMsg: 'Error adding data' })
    })
  }

  render() {
    return (
      <div className="app">
        <AddItem handleAdd={this.handleAdd}/>
        <ProdList 
          products={this.state.products} 
          error={this.state.errorMsg} 
          handleRemove={this.handleRemove} 
          handleUpdate={this.handleUpdate}/>
      </div>
    );
  }

}

export default App;
