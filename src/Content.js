import React, { Component } from 'react';

import ProfilePage from './ProfilePage.js';
import {ThemeContext, UserContext} from './App.js';

class Content extends Component {
  render() {
  	return(
      	<ThemeContext.Consumer>
	      {({theme, toggleTheme}) => (
	        <UserContext.Consumer>
	          {user => (
	            <ProfilePage user={user} theme={theme} />
	          )}
	        </UserContext.Consumer>
	      )}
	    </ThemeContext.Consumer>
      );
    }
}

export default Content;