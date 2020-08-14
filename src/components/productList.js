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
    marginLeft: 'calc(100vw - 100vw*0.9)',
    marginRight: 'calc(100vw - 100vw*0.9)',
}

const listStyle = {
    width: '100vw',
    listStyleType: 'none',
}

export default ProductList;