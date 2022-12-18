import "./App.css";
import HomePage from "./pages/client/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/client/Auth/Auth";
import PlansPage from "./pages/client/PlansPage/PlansPage";
import ServiceDescription from "./components/ServiceDescription/ServiceDescription";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/service-description" element={<ServiceDescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
