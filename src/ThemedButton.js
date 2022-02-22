import React, { Component } from 'react';
import {ThemeContext} from './App.js';

class ThemedButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <button className={theme}
            onClick={toggleTheme}
            style={{backgroundColor: theme}}>
            Toggle Tema
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemedButton;