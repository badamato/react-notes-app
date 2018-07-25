import React from 'react';
import DocumentList from './DocumentList';
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedId: -1,
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

        <DocumentEditor note={this._getSelectedNote()}/>
      </div>
    );
  }

  _updateNote = (noteContent) => {
    //grab existing note
    let theNote = this._getSelectedNote();

    //make a copy and update the copy

    //version 1: object.assign
    // let updatedNote = Object.assign({}, theNote);
    // updatedNote.content = noteContent;

    //version 2: sprinkles! (object spread)
    let updatedNote = {
      ...theNote,
      content:  noteContent
    };

    let notesArrayWithUpdatednote = [
      ...this._allNotesExceptSelectedNote(),
      updatedNote
    ];
    //set the state
    


  }

  _allNotesExceptSelectedNote = () => {
    let notesWithoutSelectedNote = this.state.notes.filter(note => note.id !== this.state.selectedId);
    return notesWithoutSelectedNote;
  }

  _getSelectedNote = () => {
    let theNote = this.state.notes.find(note => note.id === this.state.selectedId);
    if (!theNote) {
      theNote = this.state.notes[0];
    }
    return theNote;
  }

  _selectNote = (noteId) => {
    console.log(noteId);

    this.setState({
      selectedId: noteId
    });
  }

}

export default App;
