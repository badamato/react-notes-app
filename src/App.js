import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="notes-app">
        <header className="search-bar">
        <h1>React Notes App</h1>
        <input type="text" />
        </header>

        
        <div className="document-list"></div>
      </div>
    );
  }
}

export default App;
