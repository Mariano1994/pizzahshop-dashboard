import { Outlet } from "react-router"

const AppLayout = () => {
return (
 <div>
  <h1> Header</h1>
  <div>
    <Outlet/>
  </div>
 </div>
)
}

export default AppLayout