import React, { Component } from 'react';

class RefreshList extends Component {
  
  render() {

    return (
      <div className="refresh-container" style={containerStyle}>
            <p>Last Updated: 2020-08-04 18:35:24</p>
            <div>
                <button style={buttonStyle}><strong>Update List</strong></button>
            </div>
      </div>
    );
  }

}

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2em',
}

const buttonStyle = {
    height: '3em',
    marginLeft: '2em',
    paddingLeft: '1em',
    paddingRight: '1em',
    backgroundColor: '#ccc',
    color: '#555',
    border: '3px solid #777',
    borderRadius: '3px',
}

export default RefreshList;