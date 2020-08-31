import React, { Component } from 'react';

class NewItem extends Component {

  constructor() {
    super()
    this.state = {
      newUrl: '',
    }
  }

  handleUrlChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.handleAdd(this.state.newUrl)
    this.setState({ newUrl: '' })
  }
  
  render() {
    return (
      <div className="newItemWrapper">
        <form className="newForm" style={formStyle} onSubmit={this.onSubmit}>
            <input type="text" name="newUrl" 
              style={inputStyle}
              value={this.state.newUrl} 
              placeholder="Insert amazon product url..."
              onChange={this.handleUrlChange} />
            <button type="submit" style={buttonStyle}>Add To List</button>
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
  backgroundColor: '#82aa9f',
  color: '#eee',
  border: '3px solid #82ac9f',
  borderRadius: '5px',
  paddingLeft: '1em',
  paddingRight: '1em',
}

export default NewItem;