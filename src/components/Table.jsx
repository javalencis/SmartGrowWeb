
import { AlertRow } from "./AlertRow"
import '../styles/Table.scss'
const headers = ['Fecha', 'Descripción', 'Bloque', 'Guirnalda', 'Estado']

export const Table = ({alerts}) => {
    return (
        <table className="TableAlerts">
            <thead>
                <tr className="TableHeaders">
                    {headers.map((header, index) => (
                        <th className="TableHeader" key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    alerts.map((alert,index)=>(
                        <AlertRow key={index} alert={alert}/>
                    ))
                }
            </tbody>
        </table>
    )
}
