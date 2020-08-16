import * as types from '../constants';
import * as Api from '@/api'
import { Dispatch } from 'redux';

export const setUserInfo = (data: any) => {
    return {
        type: types.SET_USER_INFO,
        data
    }
}

export const clearUserInfo = () => {
    return {
        type: types.CLEAR_USER_INFO
    }
}


export const login = (data: any) => (dispatch: Dispatch) => {
    return new Promise((resolve, reject) => {
        Api.login(data).then((res: any) => {
            if(res.code===0){
                dispatch(setUserInfo(res.data))
                resolve(res)
            }else{
                reject(res)
            }
        })
    })
};
  

// https://www.jianshu.com/p/51c8eaa9fa2a