import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/AppContext"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

export const LayoutPrivate = () => {
  const { isLogin } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    }

  },[isLogin])
  return (
    <>

      <Outlet />:

    </>
  )
}
