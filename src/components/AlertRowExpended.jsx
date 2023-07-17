import {  formatHour } from "../libs/functions"
import '../styles/AlertRowExpended.scss'
export const AlertRowExpended = ({alert}) => {

    return (
        <tr className="AlertRowExpended">
            <td colSpan='5'>
                <p><span>Hora:</span>  {formatHour(alert.createdAt)}</p>
                <p><span>Componente:</span> {alert.edicion.componente}</p>
                <p><span>Tipo:</span> {alert.edicion.tipo}</p>
                <p><span>Por:</span> {alert.usuario.usuario} a las {formatHour(alert.updatedAt)}</p>
            </td>
        </tr>
    )
}
