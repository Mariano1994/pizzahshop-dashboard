import { Outlet } from "react-router"
import Header from "../../Header"

const AppLayout = () => {
return (
 <div className="flex flex-col min-h-screen antialiased">
  <Header/>
  <div className="flex-1 flex-col gap-4 p-8 pt-6">
    <Outlet/>
  </div>
 </div>
)
}

export default AppLayout