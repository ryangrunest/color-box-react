import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorArr: ['#097054', '#FFDE00', '#6599FF', '#FF9900'],
      background: '#012FJ9'
    }
  }

  static defaultProps = {
  }

  pickRandomColor() {
    let pickedColor = this.state.colorArr[Math.floor(Math.random() * 4)];
    console.log(pickedColor);
    if (this.state.background !== pickedColor) {
      this.setState({
        background: pickedColor
      });
    } else {
      this.pickRandomColor();
    }
    
  }

  render() {
    return(
      <div 
        style={{backgroundColor: this.state.background}} 
        onClick={() => this.pickRandomColor()} 
        className="ColorBox"
      />
    )
  }
}

export default ColorBox;