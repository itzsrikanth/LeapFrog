import React from 'react';
import 'bootstrap-scss/bootstrap.scss';
import './index.scss';

import Taskbar from '../Taskbar';
import RouterModule from '../RouterModule';

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <div className="taskbar">
                    <Taskbar />
                </div>
                <div className="app d-flex">
                    <RouterModule />
                </div>
                <div className="status-bar"></div>
            </>
        );
    }
}
