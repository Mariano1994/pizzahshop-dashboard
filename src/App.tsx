import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop"/>
        <RouterProvider router={routes} />
      </HelmetProvider>
  );
}

export default App;
