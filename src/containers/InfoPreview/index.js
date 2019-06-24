import React from 'react';
import { connect } from 'react-redux';

import './index.scss';

class InfoPreview extends React.Component {

    render() {
        return (
            <>
                <h5 className="info-heading p-1">project</h5>
                {
                    this.props.accessKey.map((key, index) =>
                        <div key={index}>
                            <p>{key.access}</p>
                            { key.tables && key.tables.length ?
                                <ul>
                                    { key.tables.map(table =>
                                        <li>
                                            <span>{ table.name }</span>
                                            <span>{ table.region }</span>
                                        </li>    
                                    ) }
                                </ul> :
                                <p>No Tables</p>
                            }
                        </div>
                    )
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        accessKey: state.accessKey
    };
};

export default connect(mapStateToProps)(InfoPreview);
