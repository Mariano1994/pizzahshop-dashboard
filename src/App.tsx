import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Toaster} from 'sonner'

function App() {
  return (
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop"/>
        <RouterProvider router={routes} />
        <Toaster richColors closeButton/>
      </HelmetProvider>
  );
}

export default App;
