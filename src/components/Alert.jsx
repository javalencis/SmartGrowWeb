
import { useState } from 'react'

import '../styles/Alert.scss'
export const Alert = ({ data,setModalAlert,setAlertClick}) => {

    const handleOnClickAlert = () =>{
        setAlertClick(data)
        setModalAlert(true)
    }
    return (
        <div className={data.estado ? "Alert corrected" : "Alert not_corrected"} onClick={handleOnClickAlert}>
            <div className="AlertLeft">

                <p className="AlertLeft-description">{data.descripcion}</p>
                <div className="AlertLeft-bg">
                    <p>Bloque: {data.bloque}</p>
                    <p>Guirnalda: {data.guirnalda}</p>
                </div>
            </div>
            <div className="AlertRight">
                <p className="AlertRight-status">Estado: {data.estado ? "Corregido" : "No corregido"}</p>
                {
                    data.usuario && (
                        <p className="AlertRight-user">Por: {data.usuario.usuario}</p>

                    )
                }
            </div>
               

        </div>
    )
}
