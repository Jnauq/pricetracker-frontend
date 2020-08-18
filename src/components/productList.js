import React, { Component } from 'react';
import axios from 'axios'
import Product from './product'

class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            products : [],
            errorMsg : ''
        }
    }

    componentDidMount() {
        axios.get('https://amazon-api-082020.herokuapp.com/api/products')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch(error => {
                this.setState({ errorMsg: 'Error retrieving data' })
            })
    }
  
    render() {
        const { products, errorMsg } = this.state
        return (
            <div>
                <button style={buttonStyle}><strong>Update List</strong></button>
                <div className="productwrapper" style={listWrapperStyle}>
                    <ul className="listwrapper" style={listStyle}>
                    {
                        products.length ?
                        products.map((element) => (<Product key={element.id} data={element}/>)) : null
                    }

                    { errorMsg ? <div>{errorMsg}</div> : null }
                    </ul>
                </div>
            </div>
        );
    }

}

const listWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em',
    marginLeft: 'calc(100vw*0.1)',
    marginRight: 'calc(100vw*0.1)',
}

const listStyle = {
    width: '100vw',
    listStyleType: 'none',
}

const buttonStyle = {
    height: '3em',
    marginTop: '2em',
    marginLeft: 'calc(100vw*0.5 - 4em)',
    paddingLeft: '1em',
    paddingRight: '1em',
    backgroundColor: '#ccc',
    color: '#555',
    border: '3px solid #999',
    borderRadius: '3px',
}

export default ProductList;