import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";

import MySearch from "./components/MySearch";
import Settings from "./components/Settings";
import { useState } from "react";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [metric, setMetric] = useState({
    metric: "&units=metric",
    simbolo: "°C",
  });
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home metric={metric} />} />
            <Route
              path="/settings"
              element={<Settings setMetric={setMetric} />}
            />
            <Route
              path="/mysearch/:city"
              element={<MySearch metric={metric} />}
            />
            <Route path="/notFoundPage" element={<NotFoundPage />} />
          </Routes>
        </div>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
