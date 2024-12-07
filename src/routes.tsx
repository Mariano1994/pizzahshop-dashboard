import { createBrowserRouter } from "react-router";
import Dashboard from "./components/pages/app/Dashboard";
import SignIn from "./components/pages/auth/Sign-in";
import AppLayout from "./components/pages/_layout/app";
import AuthLayout from "./components/pages/_layout/auth";
import SignUp from "./components/pages/auth/Sign-up";

export const routes = createBrowserRouter([
  {
  path: '/',
  element: <AppLayout/>,
  children: [{
    path:'/',
    element: <Dashboard/>
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