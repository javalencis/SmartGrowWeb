import { useEffect, useState } from "react"
import { useAppContext } from "../contexts/AppContext"
import { LayoutModal } from '../containers/LayoutModal'
import { ModalAlert } from './ModalAlert'
import '../styles/Alerts.scss'
import { Alert } from "./Alert"
import { AlertsHistory } from "./AlertsHistory"

export const Alerts = ({ view }) => {
    const { user } = useAppContext()
    const [modalAlert, setModalAlert] = useState(false)
    const [alertClick, setAlertClick] = useState({})
    const [alerts, setAlerts] = useState([])
    const [btnSelected, setBtnSelected] = useState('tr')

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3001/api/alerts')
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setAlerts(data.reverse())
        }
        return () => {
            eventSource.close()
        }
    }, [])

    return (
        <section className="Alerts">
            <div className="AlertsButtons">
                <button onClick={() => setBtnSelected('tr')}>
                    Tiempo Real
                </button>
                {
                    view === "alerts" && (

                        user.role === "admin" && (

                            <button onClick={() => setBtnSelected('hi')}>
                                Historico
                            </button>
                        )
                    )
                }
            </div>
            {
                btnSelected === 'tr' ?
                    <div className="AlertsList">
                        {
                            alerts.map((alert) => (
                                <Alert
                                    key={alert._id}
                                    data={alert}
                                    setModalAlert={setModalAlert}
                                    setAlertClick={setAlertClick}
                                />
                            ))
                        }
                    </div>:
                    <AlertsHistory alerts={alerts}/>
                }

            {
                modalAlert && (
                    <LayoutModal setModalAlert={setModalAlert}>
                        <ModalAlert alert={alertClick} setModalAlert={setModalAlert} />
                    </LayoutModal>
                )
            }

        </section>
    )
}
