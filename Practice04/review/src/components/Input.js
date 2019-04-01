import React from 'react';

export default class Input extends React.Component {
	render () {
  		return <input type="text" 
            placeholder="Enter a number..."
            className="todo-app__input"
			onKeyPress={this.props.onKeyPress}
        />;
  	}
}