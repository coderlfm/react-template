import React, { memo, useState } from 'react'

import { getTestDataApi } from '@/services/home'
import useToken from '@/store/useToken'

export default memo(function Home() {

    const [userInfo, setUserInfo] = useState(null)
    const Token = useToken.useContainer()

    /**
     * 设置token
     */
    const changeToken = () => Token.changeToken('#123456abc')

    /**
     * 设置token
     */
    const clearToken = () => Token.changeToken('')
    

    /**
     * 获取测试数据
     */
    const getTestData = async () => {
        const result = await getTestDataApi();
        setUserInfo(result);
    }


    return (
        <div>
            <h2>Home</h2><br />

            <h4>token：{Token.token}</h4><br />
            <button onClick={changeToken}>设置token</button>&nbsp;
            <button onClick={clearToken}>清空token</button><br />
            
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
