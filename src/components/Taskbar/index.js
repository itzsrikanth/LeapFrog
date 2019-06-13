import React from 'react';
import './index.scss';
import data from './buttons.json';

export default class Taskbar extends React.Component {

    generateTaskbar = () =>
        data.map(ribbon => (
            <div id={ribbon.name} className="tb-ribbon">
                {ribbon.buttons.map(btn => (
                    <span id={btn.name} className="tb-button">{btn.icon}</span>
                ))}
            </div>
        ));

    render() {
        console.log(data);
        return (
            <div>{this.generateTaskbar()}</div>
        );
    }
}