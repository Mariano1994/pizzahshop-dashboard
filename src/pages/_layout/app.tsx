import { Outlet, useNavigate } from "react-router"
import Header from "../../components/Header"
import { useEffect } from "react"
import { api } from "../../lib/axios"
import { isAxiosError } from "axios"


const AppLayout = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    const interceptorId = api.interceptors.response.use(
      response => response,
      error => {
        if(isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if(status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', {replace: true})
          }
        }
      }
    )

    return ()=> {
      api.interceptors.response.eject(interceptorId)
    }


  },[navigate])
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