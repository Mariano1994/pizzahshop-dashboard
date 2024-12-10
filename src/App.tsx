import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {Toaster} from 'sonner'
import { ThemeProvider } from "./components/theme/theme-provider";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="pizza.shop">
          <Helmet titleTemplate="%s | pizza.shop"/>
          <QueryClientProvider client={queryClient} >
            <RouterProvider router={routes} />
          </QueryClientProvider>
            <Toaster richColors closeButton/>
        </ThemeProvider>
      </HelmetProvider>
  );
}

export default App;
