import * as types from '../constants';
import Api from '@/api'
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
            if(res.data.code===0){
                dispatch(setUserInfo(res.data))
                resolve(res)
            }else{
                reject(res)
            }
        }).catch((err: any) => {
            console.log("服务页面数据请求错误！", err);
        })
    })
};
  
// 这里的action 接受一个数据参数，叫data，名字无所谓
// export const loginRequest = (data: any) => {
//     // 异步的action
//     return async (dispatch: Dispatch) => {
//         // 这个是拿到数据以后，再去dispatch(update)
//         const res = await Api.loginRequest()
//         dispatch(setUserInfo(res.data))
//     }
// }

// https://www.jianshu.com/p/51c8eaa9fa2a
// https://www.jianshu.com/p/e51d7b22bd3a