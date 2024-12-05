import { createBrowserRouter } from "react-router";
import Dashboard from "./components/pages/app/Dashboard";
import SignIn from "./components/pages/auth/Sign-in";

export const routes = createBrowserRouter([
  {
  path: '/',
  element: <Dashboard/>
},
{
  path: '/sign-in',
  element: <SignIn/>
}
])