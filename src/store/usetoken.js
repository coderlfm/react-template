import { useState } from 'react'
import { createModel } from 'hox'

function useToken() {
    const [token, setToken] = useState('');
    const changeToken = (payload) => {
        console.log(payload);
        setToken(payload.token);
    }

    return { token, changeToken }
}

export default createModel(useToken);