import React from 'react';

class DocumentList extends React.Component {
    render() {
        return(
            <div className="document-list">
            <ul>
              <li className="document-list-item">One Note!!</li>
              <li className="document-list-item">Two Note!!</li>
              <li className="document-list-item">Three Note!!</li>
            </ul>
            </div>
        );
    }
}

export default DocumentList;