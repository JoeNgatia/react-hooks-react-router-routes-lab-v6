import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import routes from "./routes";


ReactDOM.render(
    <React.StrictMode>
      <Router>
        <RouterProvider router={routes} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
