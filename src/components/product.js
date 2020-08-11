import React, { Component } from 'react';

class Product extends Component {
    
    render() {
        return (
            <li className="product" style={productStyle}>
                <button id="li-removeBtn" style={buttonStyle}><em><strong>X</strong></em></button>
                <div className="li-container" style={containerStyle}>
                    <div className="li-left" style={leftStyle}>
                        <img src={this.props.data.url} style={imageStyle}></img>
                    </div>
                    <div className="li-right" style={rightStyle}>
                        <h3 className="li-head">{this.props.data.name}</h3>
                        <p className="li-sub">{this.props.data.id}</p>
                        <h4 className="li-price" style={priceStyle}>{this.props.data.price}</h4>
                    </div>
                </div>
            </li>
        );
    }
}

const productStyle = {
    padding: '0.75em',
    backgroundColor: '#eee',
}

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const imageStyle = {
    width: '100%',
    minHeight: '100px',
    maxHeight: '200px',
    objectFit: 'contain',
}

const leftStyle = {
    flex: '0 30%',
    margin: '1em',
}

const rightStyle = {
    flex: '1',
    paddingTop: '1em',
    paddingBottom: '1em',
}

const priceStyle = {
    marginTop: '3vh',
    fontSize: '4vh',
    color: '#555',
}

const buttonStyle = {
    height: '2.5em',
    paddingLeft: '1em',
    paddingRight: '1em',
    backgroundColor: '#d55',
    color: '#eee',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    top: '0',
    float: 'right',
}

export default Product;