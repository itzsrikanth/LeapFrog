import {
    ADD_ACCESS_KEY
} from '../actionConst';

const accessKey = (state = [], action) => {
    switch(action.type) {
        case ADD_ACCESS_KEY:
            console.log(ADD_ACCESS_KEY);
            return state;
        default:
            return state;
    }
};

export default accessKey;