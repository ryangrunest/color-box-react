import React, { Component } from 'react';
import './ColorBoxes.css';
import ColorBox from '../ColorBox';

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 20
  }
  constructor(props) {
    super(props);
    this.state = {
      boxArr: Array.from({length: this.props.numBoxes})
    }
  }
  render() {
    return(
      <div className="ColorBoxes">
        {this.state.boxArr.map(b => <ColorBox key={b}/>)}
      </div>
    )
  }
}
export default ColorBoxes;