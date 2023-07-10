import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import '../styles/Alerts.scss'
import api from "../api/api"
import { Alert } from "./Alert"
export const Alerts = ({ view }) => {
    const { user } = useContext(AppContext)
    const [alerts, setAlerts] = useState([])
    const findAlerts = async () => {
        const res = await api.get('/alerts')
        setAlerts(res.data)
    }
    useEffect(() => {
        findAlerts()
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
                        <Alert key={alert._id} data={alert} />
                    ))
                }
            </div>


        </section>
    )
}
