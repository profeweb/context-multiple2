import React, { Component } from 'react';
import './App.css';

import Layout from './Layout.js';

// Context per al tema
export const ThemeContext = React.createContext({
  theme: "white",
  toggleTheme: () => {},
});
ThemeContext.displayName = 'ContextTema';  

// Context per a l'usuari loggeat
export const UserContext = React.createContext();
UserContext.displayName = 'ContextUsername';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: this.state.theme === "white" ? "black": "white",
      }));
    };


    this.state = {
      theme: "white",
      toggleTheme: this.toggleTheme,
    };
  }

  render() {

      return (
        <ThemeContext.Provider value={this.state}>
          <UserContext.Provider value={this.props.signedInUser}>
            <Layout />
          </UserContext.Provider>
        </ThemeContext.Provider>
      );
    }
}

export default App;