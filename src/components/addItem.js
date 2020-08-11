import React, { Component } from 'react';

class NewItem extends Component {
  
  render() {

    return (
      <div className="newItemWrapper">
        <form className="newForm" style={formStyle} >
            <input type="text" id="addInput" placeholder="Insert Amazon product url..." style={inputStyle} />
            <button id="addBtn" style={buttonStyle}><strong>Add</strong></button>
        </form>
      </div>
    );
  }

}

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '50px',
  width: '100%',
}

const inputStyle = {
  fontSize: 'inherit',
  height: '3em',
  width: '75%',
  paddingLeft: '1em',
}

const buttonStyle = {
  fontSize: 'inherit',
  height: '3em',
  width: '4em',
  backgroundColor: '#11bb11',
  color: '#eee',
  border: '3px solid #119911',
  borderRadius: '5px'
}

export default NewItem;