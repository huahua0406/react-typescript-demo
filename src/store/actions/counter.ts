import {DECREMENT, INCREMENT} from '../constants'

export interface IINCREMENTAction {
    type: INCREMENT;
    num: number
}

export interface IDECREMENTAction {
    type: DECREMENT;
    num: number;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;


// 增加 state 次数的方法
export const increment = (num: number): IINCREMENTAction => ({
    type: INCREMENT,
    num
})

// 减少 state 次数的方法
export const decrement = (num: number): IDECREMENTAction => ({
    type: DECREMENT,
    num
})
