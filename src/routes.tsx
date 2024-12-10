import { createBrowserRouter } from "react-router";

import SignIn from "./pages/auth/Sign-in";
import AppLayout from "./pages/_layout/app";
import AuthLayout from "./pages/_layout/auth";
import SignUp from "./pages/auth/Sign-up";
import Orders from "./pages/app/orders/Orders";
import Dashboard from "./pages/app/dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage";

export const routes = createBrowserRouter([
  {
  path: '/',
  element: <AppLayout/>,
  errorElement: <ErrorPage/>,
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