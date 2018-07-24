import React from 'react';

class DocumentEditor extends React.Component {
    render() {
        return(
            <div className="document-editor">
            <textarea 
            value={this.props.note.content} /></div>
        );
    }
}

export default DocumentEditor;