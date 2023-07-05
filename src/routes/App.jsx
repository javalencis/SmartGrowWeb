import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/public/Login"
import { AppProvider } from "../contexts/AppContext"
import { LayoutPublic } from "../containers/LayoutPublic"
import { LayoutPrivate } from "../containers/LayoutPrivate"
import { Admin } from "../pages/private/Admin"

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<LayoutPublic />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path='/app' element={<LayoutPrivate />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
