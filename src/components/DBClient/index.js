import React from 'react';

import InfoPreview from '../InfoPreview';
// import QueryEditor from '../QueryEditor';

export default class DBClient extends React.Component {
    render() {
        return (
            <>
                {/* <h1>DBClient</h1> */}
                <div className="info-preview h-100 col-3">
                    <InfoPreview />
                </div>
                <div className="main h-100 col-9">
                    <div className="tabs"></div>
                    {/* <div className="code-editor">
                        <QueryEditor />
                    </div> */}
                    <div className="result-preview">
                        {this.props.children}
                    </div>
                    <div className="logs-preview"></div>
                </div>
            </>
        );
    }
}