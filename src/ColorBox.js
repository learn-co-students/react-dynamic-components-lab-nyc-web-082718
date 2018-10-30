import React, { Component } from 'react';
class ColorBox extends Component {
  render() {
    let newOpacity = this.props.opacity
    if (newOpacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: newOpacity}}>
         {<ColorBox opacity={newOpacity - 0.1} />}
        </div>
      );
    } else {
      return null
    }

  }
}


export default ColorBox;
class Example extends Component {
	render() {
		const newValue = this.props.value * 2;

		if (this.props.value < 100) {
			return (
				<div>
					<Example value={newValue} />
				</div>
			);
		} else {
			return null;
		}
	}
}
