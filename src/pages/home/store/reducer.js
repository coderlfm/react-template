import * as actionType from './contants'

const initState = {
    token: '',   
    userInfo: null,  
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.CHANGE_TOKEN:
            state.token = action.token;
            return { ...state }

        case actionType.CHANGE_USERINFO:
            state.userInfo = action.userInfo;
            return { ...state }

        default:
            return state
    }
}

export default reducer;