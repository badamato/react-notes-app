import React from 'react';
import DocumentList from './DocumentList';
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        searchText: '',
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
            title: "Larry.  He is a jokester",
            content: "woooohoooooo!"
          },
          {
            id: 1003,
            timestamp: new Date(),
            title: "Gail. Who likes Gail?!",
            content: "barf"
          },
          {
            id: 1004,
            timestamp: new Date(),
            title: "Redux",
            content: "React could work - but not now"
          }
        ]

    };
  }


  render() {
    return (
      <div className="notes-app">
        <SearchBar 
        text={this.state.searchText}
        handleChange={this._updateSearchText}
        />

        <DocumentList 
        allNotes={this._getFilteredNotes()} 
        handleSelection={this._selectNote} 
        />

        <DocumentEditor 
        note={this._getSelectedNote()}
        handleChange={this._updateNote}
        />
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      selectedId: this.state.notes[0].id
    });
  }

  _updateSearchText = (newSearchText) => {
    this.setState({
      searchText: newSearchText
    });
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
      updatedNote,
      ...this._allNotesExceptSelectedNote()
    ];

    //set the state
    this.setState({
      notes: notesArrayWithUpdatednote
    });

  }

  _allNotesExceptSelectedNote = () => {
    let selectedId = this.state.selectedId;
    if (selectedId === -1) {
      selectedId = this.state.notes[0].id;
    }

    let notesWithoutSelectedNote = this.state.notes.filter(note => note.id !== this.state.selectedId);
    return notesWithoutSelectedNote;
  }

  _getFilteredNotes = () => {
    //is there any search text?
    if (this.state.searchText !== '') {
      //if so, filter the list
      let filteredNotes = this.state.notes.filter(note => {
        let doesTitleMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());


        let doesContentMatch = note.content.toLowerCase().includes(this.state.searchText.toLowerCase());

        return doesTitleMatch || doesContentMatch;
      });
      return filteredNotes;
    } else {
      //if not, return all the notes
      return this.state.notes;
    }
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
