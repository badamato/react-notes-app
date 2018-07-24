import React from 'react';
import DocumentList from './DocumentList';
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        notes: [
          {
            id: 1001,
            timestamp: new Date(),
            title: "Bruce.  He is for real!",
            content: "bark, bark, bark"
          },

          {
            id: 1002,
            timestamp: new Date(),
            title: "Larry.  He is a jokester!",
            content: "woooohoooooo!"
          }
        ]

    };
  }


  render() {
    return (
      <div className="notes-app">
        <SearchBar />

        <DocumentList allNotes={this.state.notes} 
        handleSelection={this._selectNote} />

        <DocumentEditor note={this.state.notes[0]}/>
      </div>
    );
  }


  _selectNote = (noteId) => {
    console.log(noteId);
  }

}

export default App;
