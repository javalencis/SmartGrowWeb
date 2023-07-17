import iGarland from '../assets/icons/guirnalda.png'
import iGraphic from '../assets/icons/grafico.png'
import iAlerts from '../assets/icons/alertas.png'
import iControl from '../assets/icons/control.png'
import iUser from '../assets/icons/usuario.png'

const adminMenu = [
    {to:'estado-guirnaldas',title:'Estado Guirnalda',icon:iGarland},
    {to:'grafica-guirnalda',title:'Grafica Guirnalda',icon:iGraphic},
    {to:'alertas',title:'Alertas',icon:iAlerts},
    {to:'control',title:'Control',icon:iControl},
    {to:'usuarios',title:'Usuarios',icon:iUser}
]

const adminUser = [
    {to:'estado-guirnaldas',title:'Estado Guirnalda',icon:iGarland},
    {to:'alertas',title:'Alertas',icon:iAlerts},
    {to:'edicion-guirnalda',title:'Editar Guirnalda',icon:iControl}
]

export const menuRole = (role) =>{
    if(role === "admin"){
        return adminMenu
    }else{
        return adminUser
    }
}