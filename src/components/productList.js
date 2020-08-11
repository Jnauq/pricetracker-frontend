import React, { Component } from 'react';
import Product from './product'

class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            products : [
                {
                    name : 'Samsung galaxy phone',
                    id : '53142',
                    url : 'https://images-na.ssl-images-amazon.com/images/I/41q8hj6DQvL._AC_.jpg',
                    price : '$1008',
                },
                {
                    name : 'Desktop PC with keyboard and mouse',
                    id : '112',
                    url : 'https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SX522_.jpg',
                    price : '$1042',
                },
                {
                    name : 'Canon camera',
                    id : '054',
                    url : 'https://m.media-amazon.com/images/I/81l6xdQOHyL._AC_UY327_FMwebp_QL65_.jpg',
                    price : '$400',
                },
            ]
        }
    }
  
    render() {
        return (
            <div>
                <div className="productwrapper" style={listWrapperStyle}>
                    <ul className="listwrapper" style={listStyle}>
                    {this.state.products.map((element) => (
                        <Product data={element}/>
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