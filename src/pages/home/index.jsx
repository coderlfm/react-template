import React, { memo, useState } from 'react'

import { getTestDataApi } from '@/services/home'

import useToken from '@/store/usetoken'

export default memo(function Home() {

    const [userInfo, setUserInfo] = useState(null)
    const token = useToken();

    /**
     * 设置token
     */
    const changeToken = () => token.changeToken({ token: '#123456abc' })

    /**
     * 清空token
     */
    const clearToken = () => token.changeToken({ token: '' })


    /**
     * 获取测试数据
     */
    const getTestData = async () => {
        const result = await getTestDataApi();
        setUserInfo(result);
    }


    return (
        <div>
            <h2>Home</h2>
            <div style={{ width: 500, margin: '20px auto' }}>
                <hr />
                <p>token: {token.token}</p>
                <button onClick={changeToken}>设置token</button>
                <button onClick={clearToken}>清空token</button><br /><br />
                <hr />
            </div>

            {
                userInfo && <p>姓名：{userInfo.data.name} 年龄：{userInfo.data.age} </p>
            }
            <br />
            <button onClick={getTestData}>请求数据</button><br />


        </div>
    )
})

