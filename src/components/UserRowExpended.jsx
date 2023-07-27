import { formatHour, formatDate } from "../libs/functions"
import '../styles/AlertRowExpended.scss'
export const UserRowExpended = ({ data }) => {

    return (
        <tr className="AlertRowExpended">
            <td colSpan='4'>

                <p className="AlertRowExpended_mb">
                    <span>Rol: </span>{data.role}
                </p>
                <p>
                    <span>Creado: </span>{formatDate(data.createdAt)} a las {formatHour(data.createdAt)}
                </p>

            </td>
        </tr>
    )
}
