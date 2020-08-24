import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrement, increment } from '../../store/actions/counter';

// 创建类型接口
export interface IProps {
    value: number,
    onIncrement?: () => void,
    onDecrement?: () => void
}
// 函数组件
// 使用接口代替 PropTypes 进行类型校验
// const Counter = ({ value }: IProps) => {
//     return <p>Clicked: { value } times</p>
// }
// export default Counter;


// 使用类的方式定义 Counter 组件
// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.PureComponent<IProps> {
    public render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: { value } times
                <br />
                <br />
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ onDecrement }> - </button>
            </p>
        )

    }
}

const mapStateToProps = (state: any) => ({
    value: state.counter.num
})
// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})
// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

