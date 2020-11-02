import * as actionType from './contants'


/**
 * 设置token
 * @param {object} data 
 */
export const changeTokenAction = data => ({ type: actionType.CHANGE_TOKEN, token: data })



/**
 * 
 */
// export const loginAction = data => dispatch => {
//     loginApi(data).then(res => {
//         console.log('res', res);
//         dispatch(changeBannersAction(res))
//     })
// }