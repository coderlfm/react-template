import { getTestDataApi } from "@/services/home";

const home = {
    state: {
        token: '',
        userInfo: null
    },
    reducers: {
        changeToken(state, payload) {
            state.token = payload.token
            return { ...state }
        },
        changeUserInfo(state, payload) {
            state.userInfo = payload.userInfo
            return { ...state }
        }
    },
    effects: dispatch => ({
        async AsyncChangeUserInfo(payload, rootState) {
            const result = await getTestDataApi(payload);
            dispatch.home.changeUserInfo({ userInfo: result.data })
        },
    }),
}

export default home