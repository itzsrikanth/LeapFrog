import React from 'react';
import './index.scss';
import data from './buttons.json';

const svgPath = `${process.env.PUBLIC_URL}/assets/svg`;
export default class Taskbar extends React.Component {

    generateTaskbar = () =>
        data.map(ribbon => (
            <div key={ribbon.name} id={ribbon.name} className="tb-ribbon px-2 py-1 d-flex h-100">
                {ribbon.buttons.map(btn => (
                    <div key={btn.name} id={btn.name} className="tb-button px-2 py-1">
                        <img src={`${svgPath}/${btn.icon}`} alt={btn.name} />
                    </div>
                ))}
            </div>
        ));

    render() {
        console.log(data);
        return (
            <div className="d-flex align-items-center h-100">
                {this.generateTaskbar()}
            </div>
        );
    }
}