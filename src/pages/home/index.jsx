import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTestDataApi } from '@/services/home'
import { changeTokenAction } from './store/actionCreators'

export default memo(function Home() {
    const dispatch = useDispatch();

    /**
     * 设置token
     */
    const changeToken = () => {
        dispatch(changeTokenAction('#123456abc'));
    }

    /**
     * 获取测试数据
     */
    const getTestData = async () => {
        const result = await getTestDataApi();
        console.log(result);
    }

    return (
        <div>
            Home
            <button onClick={changeToken}>设置token</button><br />
            <button onClick={getTestData}>请求数据</button><br />

        </div>
    )
})
