import { createContext, useContext, useEffect, useState } from "react"
import api from "../api/api"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLogin, setIsLogin] = useState(false)


    useEffect(()=>{
        validateUser()
    },[])

    const validateUser = async()=>{
        const token = sessionStorage.getItem('token')
        if(!token){
            return false
        }

        const res = await api.get('/users/profile',{
            headers:{
                Authorization:token
            }
        })
       
        if(res.data.status){
            setUser(res.data.user)
            setIsLogin(true)
        }

    }

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                isLogin,
                setIsLogin
            }}
        >
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext =() => (useContext(AppContext))