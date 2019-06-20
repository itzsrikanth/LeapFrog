import React from 'react';
import './index.scss';


export default class ModalCard extends React.Component {
    render() {
        return (
            <div className="modal-card p-5">
                {this.props.children}
            </div>
        )
    }
}
