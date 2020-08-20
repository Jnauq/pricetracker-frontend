import React, { Component } from 'react';

class NewItem extends Component {

  constructor() {
    super()
    this.state = {
      newUrl: ''
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
            <input type="text" name="newUrl" value={this.state.newUrl} onChange={this.handleUrlChange} style={inputStyle} />
            <button type="submit" style={buttonStyle}>Submit</button>
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