import React from 'react';
import 'bootstrap-scss/bootstrap.scss';
import './index.scss';

import Taskbar from '../Taskbar';

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <div className="taskbar">
                    <Taskbar />
                </div>
                <div className="app">
                    <div className="info-preview"></div>
                    <div className="main">
                        <div className="tabs"></div>
                        <div className="code-editor"></div>
                        <div className="result-preview"></div>
                        <div className="logs-preview"></div>
                    </div>
                </div>
            </>
        );
    }
}
