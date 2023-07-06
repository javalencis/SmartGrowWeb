import { NavLink } from "react-router-dom"

export const MenuAdmin = () => {
  return (
    <div>
        <h1>SmartGrow</h1>
        <div></div>
        <nav>
            <NavLink to="/estado-guirnaldas">Estado Guirnaldas</NavLink>
            <NavLink to="/grafica-guirnalda">Grafica Guirnalda</NavLink>
            <NavLink to="/alertas">Alertas</NavLink>
            <NavLink to="/control">Control</NavLink>
            <NavLink to="/Usuarios">Estado Guirnaldas</NavLink>

        </nav>
    </div>
  )
}
