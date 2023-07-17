import { useState } from "react"
import { formatDate } from "../libs/functions"
import { AlertRowExpended } from "./AlertRowExpended"

import '../styles/AlertRow.scss'
export const AlertRow = ({ alert }) => {
    const [expanded, setExpanded] = useState(false)
    const handleClickExpand = () => {
        setExpanded(e => !e)
    }
    return (
        <>
            <tr onClick={handleClickExpand} className="AlertRow">
                <td>{formatDate(alert.createdAt)}</td>
                <td>{alert.descripcion}</td>
                <td>{alert.bloque}</td>
                <td>{alert.guirnalda}</td>
                <td>{alert.estado ? 'Corregido' : 'No Corregido'}</td>


            </tr>
            {
                expanded && (
                    <AlertRowExpended alert={alert}/>
                )
            }

        </>


    )
}
