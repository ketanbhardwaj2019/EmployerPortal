import { actionTypes } from '../../constants';

export const initialState = {
    loading: false,
    error: false,
    content: {},
    appId: null
};

const config = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CONFIG_SUCCESS:
            console.log("kk9")
            return { ...state, configState: action.payload }
        default:
            return state;
    }
}

export default config;
