import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { Navigate, Outlet } from "react-router-dom"

export const LayoutPrivate = () => {
    const {isLogin} = useContext(AppContext)
  return (
    <>
        {
            isLogin?
            <Outlet/>:
            <Navigate to="/"/>
        }
    </>
  )
}
