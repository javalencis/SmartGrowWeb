import { LateralMenu } from "../components/LateralMenu"
import '../styles/LayoutPages.scss'
export const LayoutPages = ({children}) => {
  return (
    <section className="PagesContainer">
        <LateralMenu/>
        <section className="PageSectionContainer">
            {children}
        </section>
    </section>
  )
}
