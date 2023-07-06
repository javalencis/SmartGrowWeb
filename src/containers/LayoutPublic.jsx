import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/AppContext"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

export const LayoutPublic = () => {
    const {user, isLogin } = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (isLogin) {
            if(user.role === "admin")
                navigate('/admin/estado-guirnaldas')
            else
                navigate('/app')    
        }   
    },[isLogin])

    return (
        <>

            <Outlet />:

        </>
    )
}
