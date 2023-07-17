import { useContext } from "react"
import { AppContext, useAppContext } from "../contexts/AppContext"
import { Logout } from "./Logout"
import { NavItem } from "./NavItem"
import {menuRole } from "../libs/menus.js"
import '../styles/LateralMenu.scss'


export const LateralMenu = () => {
  const { user } = useAppContext()

  return (
    <div className="LateralMenu">
      <h1>SmartGrow</h1>
      <nav>
        {
          menuRole(user.role).map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              title={item.title}
              icon={item.icon}
            />
          ))
        }

      </nav>
      <Logout/>
    </div>
  )
}
