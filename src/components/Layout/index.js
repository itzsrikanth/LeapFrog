import React from 'react';
import 'bootstrap-scss/bootstrap.scss';
import './index.scss';

import Taskbar from '../Taskbar';
import InfoPreview from '../InfoPreview';
// import QueryEditor from '../QueryEditor';

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <div className="taskbar">
                    <Taskbar />
                </div>
                <div className="app d-flex">
                    <div className="info-preview h-100 col-3">
                        <InfoPreview />
                    </div>
                    <div className="main h-100 col-9">
                        <div className="tabs"></div>
                        {/* <div className="code-editor">
                            <QueryEditor />
                        </div> */}
                        <div className="result-preview"></div>
                        <div className="logs-preview"></div>
                    </div>
                </div>
                <div className="status-bar"></div>
            </>
        );
    }
}
