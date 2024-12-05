import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
  <div>
    <h1>Authentication</h1>
    <div>
      <Outlet/>
    </div>
  </div>
  )
}

export default AuthLayout