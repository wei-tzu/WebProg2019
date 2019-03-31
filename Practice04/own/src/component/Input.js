import React from 'react'
export default ({onKeyPress}) => {
    return <input type="text" 
                  placeholder="Enter a number..."
                  onKeyPress={onKeyPress}
                  class ="todo-app__input"></input>
}