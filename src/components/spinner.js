import React from 'react';

const Spinner = () => {

    return (
        <div className="spinner-container" style={ containerStyle }>
            <div className="inner-circle" style={ innerStyle }></div>

            <p>Loading...</p>

            <div className="pie-container" style={ midStyle }></div>

            <div className="outer-circle" style={ outerStyle }></div>
        </div>
    );
}

const containerStyle = {
    color: '#82ac9f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    height: '100px',
    width: '100px',
    position: 'relative',
    transform: 'scale(1)',
}

const outerStyle = {
    backgroundColor: '#ccc',
    height: '120px',
    width: '120px',
    borderRadius: '50%',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    zIndex: '-3',
}

const midStyle = {
    width: '0px',
    height: '0px',
    borderRight: '60px solid transparent',
    borderTop: '60px solid #82ac9f',
    borderLeft: '60px solid #82ac9f',
    borderBottom: '60px solid #82ac9f',
    borderTopLeftRadius: '60px',
    borderTopRightRadius: '60px',
    borderBottomLeftRadius: '60px',
    borderBottomRightRadius: '60px',
    left: '-10px',
    zIndex: '-2',
    position: 'absolute',
    animation: 'rotate 2s linear forwards infinite',
}

const innerStyle = {
    backgroundColor: '#eee',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
}

export default Spinner;