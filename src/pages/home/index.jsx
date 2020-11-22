import React, { memo, useState } from 'react'
import { connect } from 'react-redux'

import { getTestDataApi } from '@/services/home'


const Home = memo((props) => {

    const [userInfo, setUserInfo] = useState(null)

    /**
     * 设置token
     */
    const changeToken = () => props.changeToken({ token: '#123456abc' })

    /**
     * 异步设置info
     */
    const changeUserInfo = () => props.changeUserInfo();


    /**
     * 清空token
     */
    const clearToken = () => props.changeToken({ token: '' })


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
                <p>token: {props.token}</p>
                <button onClick={changeToken}>设置token</button>
                <button onClick={clearToken}>清空token</button><br />
                <button onClick={changeUserInfo}>设置info</button>
                <br />
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

const mapState = state => ({
    token: state.home.token
})


// Example 1
const mapDispatch = dispatch => ({
    changeToken: payload => dispatch.home.changeToken(payload),
    changeUserInfo: payload => dispatch.home.AsyncChangeUserInfo(payload)
})

// Example 2
// const mapDispatch = ({ home: { changeToken } }) => ({
//     changeToken: payload => changeToken(payload)
// })

export default connect(mapState, mapDispatch)(Home)
