import iMenu from '../assets/icons/menu-burger.png'
import iAlert from '../assets/icons/alertas.png'
import iLogo from '../assets/imgs/logoblanco.png'
import '../styles/Header.scss'
import { useNavigate } from 'react-router-dom'
export const Header = ({ setOpenMenu }) => {
    const navigate = useNavigate()
    const handleClickOpenMenu = () => {

        setOpenMenu(e => !e)
    }

    const handleClickNotifications = () => {
        navigate('/app/alertas')
    }
    return (
        <header className="Header">
            <div className="HeaderMenuBurger" onClick={handleClickOpenMenu}>
                <img src={iMenu} alt="Menu desplegable" />
            </div>
            <div className="HeaderLogo">
                <img src={iLogo} alt="logo capiro blanco" />
            </div>
            <div className="HeaderNotifications" onClick={handleClickNotifications}>
                <img src={iAlert} alt="Boton de notificaciones" />
            </div>
        </header>
    )
}
