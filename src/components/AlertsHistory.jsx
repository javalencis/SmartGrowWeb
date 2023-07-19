import { useEffect, useState } from "react"
import { FilterAlerts } from "./FilterAlerts"
import { Table } from "./Table"

import { AlertRow } from "./AlertRow"
import { headersAlerts } from "../libs/headersTables"
import { Row } from "./Row"
import { AlertRowExpended } from "./AlertRowExpended"
import '../styles/AlertsHistory.scss'
import '../styles/TableAlerts.scss'


export const AlertsHistory = ({ alerts }) => {
  const [alertsAux, setAlertsAux] = useState([])

  useEffect(() => {
    setAlertsAux(alerts)
  }, [])

  return (
    <div className="AlertsHistory">
      <FilterAlerts alerts={alerts} setAlertsAux={setAlertsAux} />
      <Table
        headers={headersAlerts}
        name="TableAlerts">
        {
          alertsAux.map((alert) => (
            <Row
              key={alert._id}
              data={alert}
              RowType={AlertRow}

              expand>

              <AlertRowExpended data={alert} />
            </Row>
          ))
        }

      </Table>
    </div>
  )
}
