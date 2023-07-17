import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { LateralMenu } from '../../components/LateralMenu'
import '../../styles/Admin.scss'
import { GarlandState } from './GarlandState'

import { Alerts } from '../../components/Alerts'
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
      <section className='AdminSections'>
        <Routes>
          <Route index element={<GarlandState/>} />
          <Route path='/estado-guirnaldas' element={<GarlandState />} />
          <Route path='/alertas' element={<Alerts view={"alerts"}/>} />
        </Routes>
      </section>
    </section>

  )
}
