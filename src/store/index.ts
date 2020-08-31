import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import rootReducer from './reducers'; 
const middlewares = [thunk]
// 创建 store
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
));
console.log('store===', store.getState());
export default store


// 参考
// https://juejin.im/post/6844903792543006733#heading-16
// https://www.jianshu.com/p/2b981304cdd4