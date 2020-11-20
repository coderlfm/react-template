import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useToken(initialState = '') {
    const [token, setToken] = useState(initialState)
    const changeToken = payload => setToken(payload)

    return { token, changeToken }
}

const Token = createContainer(useToken)
export default Token
