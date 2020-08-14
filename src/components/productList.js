import React, { Component } from 'react';
import axios from 'axios'
import Product from './product'

class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        axios.get('https://amazon-api-082020.herokuapp.com/api/products')
            .then(response => {
                this.setState({products: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }
  
    render() {
        return (
            <div>
                <div className="productwrapper" style={listWrapperStyle}>
                    <ul className="listwrapper" style={listStyle}>
                    {this.state.products.map((element) => (
                        <Product key={element.id} data={element}/>
                    ))}
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