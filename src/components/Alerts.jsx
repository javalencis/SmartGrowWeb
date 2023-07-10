import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { LayoutModal } from '../containers/LayoutModal'
import { ModalAlert } from './ModalAlert'
import '../styles/Alerts.scss'
import { Alert } from "./Alert"

export const Alerts = ({ view }) => {
    const { user } = useContext(AppContext)
    const [modalAlert, setModalAlert] = useState(false)
    const [alertClick, setAlertClick] =useState({})
    const [alerts, setAlerts] = useState([])


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
                <button>
                    Tiempo Real
                </button>
                {
                    view === "alerts" && (

                        user.role === "admin" && (

                            <button>
                                Historico
                            </button>
                        )
                    )
                }
            </div>

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
            </div>
            {
                    modalAlert && (
                        <LayoutModal setModalAlert={setModalAlert}>
                            <ModalAlert alert={alertClick} setModalAlert={setModalAlert}/>
                        </LayoutModal>
                    )
                }

        </section>
    )
}
