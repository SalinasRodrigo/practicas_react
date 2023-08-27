import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FiltersProviders } from "./context/filters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProviders>
    <App />
  </FiltersProviders>
);
