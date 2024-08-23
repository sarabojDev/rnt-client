
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        token: ""
    })

    axios.defaults.baseURL = 'http://192.168.0.114:8080/api'

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@auth');
            if (value !== null) {
                const data =  JSON.parse(value)
                 
                // value previously stored
                setState({
                    ...state,
                    user: data?.user,
                    token: data?.token
                })
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getData()
    }, [])


    return <AuthContext.Provider value={[state,setState]}>
        {children}
    </AuthContext.Provider>
}

export {
    AuthProvider,
    AuthContext
}