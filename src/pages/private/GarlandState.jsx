import { Alerts } from "../../components/Alerts"
import { Blocks } from "../../components/Blocks"
import '../../styles/GarlandState.scss'
export const GarlandState = () => {
  return (
    <div className="GarlandState">
        <Blocks/>
        <Alerts/>
    </div>
  )
}
