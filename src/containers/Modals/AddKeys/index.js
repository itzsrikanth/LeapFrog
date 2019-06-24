import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';

import ModalCard from '../../../components/Modals/ModalCard/index';
import { addAccessKey } from '../../../actions';
import { regions } from '../../../constants';
import './index.scss';

// const db = require('../../../../public/db');

class AddKeys extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                access: '',
                secret: '',
                regionSelector: false
            }
        };
    }

    componentWillMount() {

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

    radioChange = e => {
        e.persist();
        console.log(e.target.value);
        this.setState(state => {
            const prevState = cloneDeep(state);
            prevState.form['regionSelector'] = e.target.value === 'all' ? false : true;
            return prevState;
        });
    }

    onsubmit = e => {
        e.preventDefault();
        /* actions is dispatched to redux state */
        this.props.addAccessKey(this.state.form);
        /* list the tables accessible for provided access keys if allowed */
        let regionList;
        if (this.state.form.regionSelector) {
            regionList = ['us-east-1'];
        } else {
            regionList = regions;
        }
        Promise.all(
            regionList.map(region =>
                require('../../../dynamo')('listTables', null, {
                    region: region,
                    accessKeyId: 'abcdef',
                    secretAccessKey: 'ioup123'
                })
            )
        ).then(console.log)
            .catch(console.error);
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
                        <input type="password" className="form-control" id="secret-key" data-state-name="secret"
                            placeholder="Secret Key" value={this.state.form.secret} onChange={this.onchange} />
                    </div>
                    <div className="d-flex flex-column">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="regionSelector" data-state-name="regionSelector"
                                value="all" checked={!this.state.form.regionSelector} onChange={this.radioChange} />
                            <label className="form-check-label" >Fetch from all regions</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="regionSelector" data-state-name="regionSelector"
                                value="specific" checked={this.state.form.regionSelector} onChange={this.radioChange} />
                            <label className="form-check-label">Choose regions to fetch from</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mr-3">Add</button>
                    <button type="reset" className="btn btn-warning">Cancel
                        {/* <Redirect to="/" /> */}
                    </button>
                </form>
            </ModalCard>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addAccessKey: key => dispatch(addAccessKey(key))
});

const mapStateToProps = state => {
    console.log(state.accessKey, state.accessKey.length);
    /* access keys are added to nedb */
    // db.collections.keys.insert(state.accessKey.concat({abc:1, def: 2}), (err, doc) => {
    //     if (err !== null) {
    //         console.error('Error: ', err);
    //     } else {
    //         console.log('Success: ', doc);
    //         db.collections.keys.find({}, (err, doc) => {
    //             if (err !== null) {
    //                 console.error('Inner Error');
    //             } else {
    //                 console.log(doc);
    //             }
    //         })
    //     }
    // });
    return { accessKey: state.accessKey };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKeys);
