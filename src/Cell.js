import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleCellClick = () =>{
    this.setState({color: this.props.selectedColor})
  }
  
  render() {
    return (
      <div onClick={this.handleCellClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}