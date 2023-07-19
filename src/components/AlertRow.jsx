import { formatDate } from "../libs/functions"
import '../styles/AlertRow.scss'

export const AlertRow = ({handleClickExpand,data}) => {
    return (
        <tr onClick={handleClickExpand} className="AlertRow">
            <td>{formatDate(data.createdAt)}</td>
            <td>{data.descripcion}</td>
            <td>{data.bloque}</td>
            <td>{data.guirnalda}</td>
            <td>{data.estado ? 'Corregido' : 'No Corregido'}</td>


        </tr>
    )
}
