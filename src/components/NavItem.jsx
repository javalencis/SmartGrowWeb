import { NavLink } from "react-router-dom"


export const NavItem = ({ to, title, icon }) => {
    return (
        
            <NavLink to={to}>
                <div>
                    <img src={icon} alt={title} />
                    {title}
                </div>
                <span></span>
            </NavLink>
        
    )
}
