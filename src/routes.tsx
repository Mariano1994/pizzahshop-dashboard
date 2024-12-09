import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/app/Dashboard";
import SignIn from "./pages/auth/Sign-in";
import AppLayout from "./pages/_layout/app";
import AuthLayout from "./pages/_layout/auth";
import SignUp from "./pages/auth/Sign-up";
import Orders from "./pages/app/orders/Orders";

export const routes = createBrowserRouter([
  {
  path: '/',
  element: <AppLayout/>,
  children: [{
    path:'/',
    element: <Dashboard/>
  },
  {
    path:'/orders',
    element: <Orders/>
  }]
},
{
  path: '/',
  element: <AuthLayout/>,
  children:[
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/sign-up',
      element: <SignUp/>
    }
  ]
}
])