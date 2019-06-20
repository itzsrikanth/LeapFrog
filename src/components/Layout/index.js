import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import 'bootstrap-scss/bootstrap.scss';
import './index.scss';

import Taskbar from '../Taskbar';
import DBClient from '../DBClient';
// Modals
import AddKeys from '../../containers/Modals/AddKeys';
export default class Layout extends React.Component {

    closeModals = withRouter(({ history }) => {
        console.log(window.location.href);
        history.push('/home');
    });

    clickHandler = e => console.log('hello');

    render() {
        return (
            <Router>
                <div id="overall-wrapper">
                    <div className="taskbar">
                        <Taskbar />
                    </div>
                    <div className="app d-flex">

                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/" >
                                <Route path="/" component={DBClient} />
                                <div className="modals active d-flex justify-content-center align-items-center" onClick={this.clickHandler}>
                                    <Route path="/add-keys" component={AddKeys} />
                                </div>
                                <Route path="/test1" component={Test1} />
                                <Route path="/mark1" component={Mark1} />
                            </Route>
                        </Switch>
                    </div>
                    <div className="status-bar"></div>
                </div>
            </Router>
        );
    }
}

class About extends React.Component {
    render() {
        setTimeout(() => {

        }, 5000);
        return (
            <h1>ABout</h1>
        );
    }
}

class Test1 extends React.Component {
    render() {
        return (
            <h1>Test 1</h1>
        );
    }
}

class Mark1 extends React.Component {
    render() {
        return (
            <h1>Mark 1</h1>
        );
    }
}
