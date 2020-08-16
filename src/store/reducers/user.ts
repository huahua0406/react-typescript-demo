import * as types from '../constants';

const initialState = {
    isLogin: false,
    userInfo: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_USER_INFO:
            return {
                ...state,
                userInfo: action.data,
                isLogin: true
            };
        case types.CLEAR_USER_INFO:
            return {
                userInfo: {},
                isLogin: false
            };
        default:
            return state;
    }
}

