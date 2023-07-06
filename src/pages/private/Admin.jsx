import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export const Admin = () => {
    const {user} = useContext(AppContext)
  return (
    <div>Hola {user.name}</div>
  )
}
