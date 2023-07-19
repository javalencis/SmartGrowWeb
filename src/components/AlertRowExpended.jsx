import { formatHour } from "../libs/functions"
import '../styles/AlertRowExpended.scss'
export const AlertRowExpended = ({ alert }) => {

    return (
        <tr className="AlertRowExpended">
            <td colSpan='5'>
                <p className="AlertRowExpended_mb">
                    <span>Bloque:</span> {alert.bloque}
                </p>
                <p className="AlertRowExpended_mb">
                    <span>Guirnalda:</span> {alert.guirnalda}
                </p>
                <p>
                    <span>Hora:</span>  {formatHour(alert.createdAt)}
                </p>
                <p>
                    <span>Componente:</span> {alert.edicion ? alert.edicion.componente : 'Sin datos'}
                </p>
                <p>
                    <span>Tipo:</span> {alert.edicion ? alert.edicion.tipo : 'Sin datos'}
                </p>
                {
                    alert.usuario && (
                        <p>
                            <span>Por: </span>
                            {alert.usuario?.usuario} a las {formatHour(alert.updatedAt)}</p>

                    )
                }
            </td>
        </tr>
    )
}
