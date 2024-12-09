import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Toaster} from 'sonner'
import { ThemeProvider } from "./components/theme/theme-provider";
import "./App.css";

function App() {
  return (
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="pizza.shop">
          <Helmet titleTemplate="%s | pizza.shop"/>
            <RouterProvider router={routes} />
            <Toaster richColors closeButton/>
        </ThemeProvider>
      </HelmetProvider>
  );
}

export default App;
