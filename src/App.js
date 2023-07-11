import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./all-routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Auth from "./context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth>
          <AllRoutes />
        </Auth>
      </BrowserRouter>
    </div>
  );
}

export default App;
