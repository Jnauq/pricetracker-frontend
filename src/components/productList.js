import React from 'react';
import Product from './product'

const ProductList = (props) => {

    return (
        <div>
            <button style={buttonStyle} onClick={props.handleUpdate}>Update List</button>
            <div className="productwrapper" style={listWrapperStyle}>
                <ul className="listwrapper" style={listStyle}>
                {
                    props.products.length ?
                    props.products.map((element) => (<Product key={element.id} data={element} handleRemove={props.handleRemove}/>)) : null
                }

                { props.errorMsg ? <div>{props.errorMsg}</div> : null }
                </ul>
            </div>
        </div>
    );
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