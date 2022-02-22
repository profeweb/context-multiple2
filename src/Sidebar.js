import React, { Component } from 'react';
import {ThemeContext} from './App.js';
import ThemedButton from './ThemedButton.js';

class Sidebar extends Component {
  render() {
  	return (
      <div>
      	<ThemeContext.Consumer>
	      {({theme, toggleTheme}) => (
	      	<div className={theme}>
	        	<h1>Sidebar {theme}</h1>
	        	<ThemedButton />
	        </div>
	      )}
	    </ThemeContext.Consumer>
      </div>
      );
    }
}

export default Sidebar;