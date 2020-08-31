import React from 'react';
import Product from './product'
import Spinner from './spinner'

const ProductList = (props) => {

    return (
        <div>
            {
                props.products.length ?
                <button style={buttonStyle} onClick={props.handleUpdate}>Fetch Latest Product Info</button> : null
            }
            <div className="productwrapper" style={listWrapperStyle}>
                <ul className="listwrapper" style={listStyle}>
                {
                    props.products.length ?
                    props.products.map((element) => (<Product key={element.id} data={element} handleRemove={props.handleRemove}/>)) : <Spinner />
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
    backgroundColor: '#af799f',
    color: '#eee',
    border: '3px solid #af67af',
    borderRadius: '3px',
}

export default ProductList;