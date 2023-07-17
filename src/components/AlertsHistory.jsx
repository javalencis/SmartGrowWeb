import { Table } from "./Table"


export const AlertsHistory = ({alerts}) => {
  return (
    <div>
        <div>
            Filtros
        </div>
        <Table alerts={alerts}/>
    </div>
  )
}
