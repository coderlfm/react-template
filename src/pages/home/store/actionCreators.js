import * as actionType from './contants'
import { getTestDataApi } from '@/services/home'


/**
 * 设置token
 * @param {Object} data 
 */
export const changeTokenAction = data => ({ type: actionType.CHANGE_TOKEN, token: data })

/**
 * 修改用户info
 * @param {Object} data 
 */
export const changeuserInfoAction = data => ({ type: actionType.CHANGE_USERINFO, userInfo: data })


/**
 * redux-thunk异步修改用户info 
 */
export const changeuserInfoActionAsync = data => dispatch => {
    getTestDataApi(data).then(res => {
        dispatch(changeuserInfoAction(res.data))
    })
}
