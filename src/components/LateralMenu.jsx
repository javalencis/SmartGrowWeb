import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Logout } from "./Logout"
import iGarland from '../assets/icons/guirnalda.png'
import iGraphic from '../assets/icons/grafico.png'
import iAlerts from '../assets/icons/alertas.png'
import iControl from '../assets/icons/control.png'
import iUser from '../assets/icons/usuario.png'

import '../styles/LateralMenu.scss'
export const LateralMenu = () => {
  const { user } = useContext(AppContext)
  const handleOnClickExit = () => {
    sessionStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className="LateralMenu">


      <h1>SmartGrow</h1>

      <nav>


        <NavLink to="estado-guirnaldas">
          <div>

            <img src={iGarland} alt="" />
            Estado Guirnaldas
          </div>
          <span></span>
        </NavLink>



        <NavLink to="grafica-guirnalda">
          <div>

            <img src={iGraphic} alt="" />
            Grafica Guirnalda
          </div>
          <span></span>

        </NavLink>



        <NavLink to="alertas">
          <div>
            <img src={iAlerts} alt="" />

            Alertas
          </div>
          <span></span>
        </NavLink>


        <NavLink to="control">
          <div>

            <img src={iControl} alt="" />
            Control
          </div>
          <span></span>

        </NavLink>


        <NavLink to="usuarios">
          <div>

            <img src={iUser} alt="" />

            Usuarios
          </div>
          <span></span>

        </NavLink>

      </nav>

      <button className="LateralMenuButtonExit" onClick={handleOnClickExit}>
        Cerrar Sesión
      </button>
    </div>
  )
}
