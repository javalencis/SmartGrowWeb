import { formatHour } from "../libs/functions"
import '../styles/AlertRowExpended.scss'
export const AlertRowExpended = ({ data }) => {

    return (
        <tr className="AlertRowExpended">
            <td colSpan='5'>
                <p className="AlertRowExpended_mb">
                    <span>Bloque:</span> {data.bloque}
                </p>
                <p className="AlertRowExpended_mb">
                    <span>Guirnalda:</span> {data.guirnalda}
                </p>
                <p>
                    <span>Hora:</span>  {formatHour(data.createdAt)}
                </p>
                <p>
                    <span>Componente:</span> {data.edicion ? data.edicion.componente : 'Sin datos'}
                </p>
                <p>
                    <span>Tipo:</span> {data.edicion ? data.edicion.tipo : 'Sin datos'}
                </p>
                {
                    data.usuario && (
                        <p>
                            <span>Por: </span>
                            {data.usuario?.usuario} a las {formatHour(data.updatedAt)}</p>

                    )
                }
            </td>
        </tr>
    )
}
