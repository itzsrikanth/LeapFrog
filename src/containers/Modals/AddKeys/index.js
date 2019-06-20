import React from 'react';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';

import ModalCard from '../../../components/Modals/ModalCard/index';
import { addAccessKey } from '../../../actions';
import './index.scss';

class AddKeys extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                access: '',
                secret: ''
            }
        };
    }

    onchange = e => {
        /* ALTERNATIVE REQUIRED */
        e.persist();
        this.setState(state => {
            const prevState = cloneDeep(state);
            prevState.form[e.target.getAttribute('data-state-name')] = e.target.value;
            return prevState;
        });
    }

    onsubmit = e => {
        e.preventDefault();
        this.props.addAccessKey(this.state.form);
    }

    render() {
        return (
            <ModalCard>
                <h3 className="add-keys">Add Access Keys</h3>
                <form className="add-key-form" onSubmit={this.onsubmit} >
                    <div className="form-group">
                        <input id="access-key" className="access-key form-control" data-state-name="access"
                            placeholder="Access Key" value={this.state.form.access} onChange={this.onchange} />
                        <small id="emailHelp" className="form-text text-muted">We do not record your data</small>
                    </div>
                    <div className="form-group secret-key">
                        <input type="password" className="form-control" id="secret-key"  data-state-name="secret"
                            placeholder="Secret Key" value={this.state.form.secret} onChange={this.onchange} />
                    </div>
                    <button type="submit" className="btn btn-success mr-3">Add</button>
                    <button type="reset" className="btn btn-warning">Cancel</button>
                </form>
            </ModalCard>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addAccessKey: key => dispatch(addAccessKey(key))
});

export default connect(null, mapDispatchToProps)(AddKeys)