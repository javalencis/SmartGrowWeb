import { NavLink } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"


export const NavItem = ({ to, title, icon }) => {
    const {setOpenMenu} = useAppContext()
    const handleOpenMenuLateral = ()=>{
        setOpenMenu(e=>!e)
    }
    return (
        
            <NavLink to={to} onClick={handleOpenMenuLateral}>
                <div>
                    <img src={icon} alt={title} />
                    {title}
                </div>
                <span></span>
            </NavLink>
        
    )
}
