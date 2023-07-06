import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Blocks } from '../../components/Blocks'
import { LateralMenu } from '../../components/LateralMenu'
import '../../styles/Admin.scss'
export const Admin = () => {

  const { isLogin } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    }

  }, [isLogin])


  return (
    <section className='AdminContainer'>
      <LateralMenu />
      <Routes>
        <Route index element={<Blocks />} />
        <Route path='/estado-guirnaldas' element={<Blocks />} />
      </Routes>
    </section>

  )
}
