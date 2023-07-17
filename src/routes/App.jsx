import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/public/Login"
import { AppContext, AppProvider } from "../contexts/AppContext"
import { LayoutPublic } from "../containers/LayoutPublic"
import { LayoutPrivate } from "../containers/LayoutPrivate"
import { Admin } from "../pages/private/Admin"
import { useContext } from "react"
import { User } from "../pages/private/User"

function App() {
  const { isLogin } = useContext(AppContext)
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPublic />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/app/*" element={<User />} />

        <Route path="*" element={<p>404</p>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
