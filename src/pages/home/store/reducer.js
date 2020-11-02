import * as actionType from './contants'

const initState = {
    token: '',   //token
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.CHANGE_TOKEN:
            state.token = action.token;
            return { ...state }

        default:
            return state
    }
}

export default reducer;