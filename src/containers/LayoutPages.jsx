import { useState } from "react"
import { Header } from "../components/Header"
import { LateralMenu } from "../components/LateralMenu"
import '../styles/LayoutPages.scss'
import { useAppContext } from "../contexts/AppContext"
export const LayoutPages = ({ children }) => {
  const {openMenu, setOpenMenu} = useAppContext()


  return (
    <section className="PagesContainer">
      <Header setOpenMenu={setOpenMenu}/>
      <LateralMenu/>
      <section className="PageSectionContainer">
        {children}
      </section>
    </section>
  )
}
