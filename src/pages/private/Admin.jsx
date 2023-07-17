import  { useEffect } from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { GarlandState } from './GarlandState'
import { Alerts } from '../../components/Alerts'
import { LayoutPages } from '../../containers/LayoutPages'


export const Admin = () => {

  const { isLogin } = useAppContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    }
   
  }, [isLogin])


  return (
    <LayoutPages>

      <Routes>
        <Route index element={<GarlandState />} />
        <Route path='/estado-guirnaldas' element={<GarlandState />} />
        <Route path='/alertas' element={<Alerts view={"alerts"} />} />
      </Routes>
    </LayoutPages>
  )
}
