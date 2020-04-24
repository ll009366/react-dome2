// import { combineReducers } from 'redux-immutable';

// export default combineReducers({
//     // 之后开发具体功能模块的时候添加 reducer
// });

const defaultState = {
    count: 0
}
export default (state = defaultState, action) => {
    //state表示所有的数据
    const newState = JSON.parse(JSON.stringify(state)); //deep copy
    let cur;
    switch (action.type) {
        case 'AddCount':
            newState.count = action.value;
            console.log(newState)
            break;
        default:
            break;
    }
    return newState;
}
