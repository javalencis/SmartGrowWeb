import { useEffect, useState } from "react"
import { FilterAlerts } from "./FilterAlerts"
import { Table } from "./Table"

import '../styles/AlertsHistory.scss'
import { arrayFilter } from "../libs/functions"
export const AlertsHistory = ({ alerts }) => {
  const [alertsAux, setAlertsAux] = useState([])

  useEffect(() => {
    setAlertsAux(alerts)
  }, [])
 
  return (
    <div className="AlertsHistory">
      <FilterAlerts alerts={alerts} setAlertsAux={setAlertsAux} />
      <Table alerts={alertsAux} />
    </div>
  )
}
