import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getTestDataApi } from '@/services/home'
import { changeTokenAction, changeuserInfoActionAsync } from './store/actionCreators'

export default memo(function Home() {

    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(null)

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
        setUserInfo(result);
    }

    /**
     * redux-thunk获取测试数据
     */
    const getTestDataAsnc = () => dispatch(changeuserInfoActionAsync())
    

    return (
        <div>
            <h2>Home</h2>
            <button onClick={changeToken}>设置token</button><br />
            <button onClick={getTestDataAsnc}>redux异步请求数据</button><br />
            <button onClick={getTestData}>请求数据</button><br />
   
            {
                userInfo &&
                <>
                    <span>姓名：{userInfo.data.name}</span>
                    <span>年龄：{userInfo.data.name}</span>
                </>
            }


        </div>
    )
})
