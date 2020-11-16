import request from './request.js'

/**
 * 获取测试数据
 */
export const getTestDataApi = params => request({ url: 'test', method: 'GET', params })
