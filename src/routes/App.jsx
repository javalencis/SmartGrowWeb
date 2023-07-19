import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/public/Login"
import { LayoutPublic } from "../containers/LayoutPublic"

import { Admin } from "../pages/private/Admin"

import { User } from "../pages/private/User"

function App() {

 
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
