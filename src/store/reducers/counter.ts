import { ModifyAction } from '../actions/counter';
import * as types from '../constants';

const initialState = {
    num: 0
};

// 处理并返回 state 
export default (state = initialState, action: ModifyAction): any => {
    switch (action.type) {
      case types.INCREMENT:
        return {
            ...state,
            num: state.num + 1
        }
      case types.DECREMENT:
        return {
            ...state,
            num: state.num - 1
        }
      default:
        return state
    }
}
