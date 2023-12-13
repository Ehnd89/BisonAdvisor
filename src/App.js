import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./comps/LogIn";
import { Register } from "./comps/Register";
import Setup from "./comps/Setup";

function App() {
  return (
    <>
      <div>
        <div className="HeaderBox">
          <p className="BisonAdvisor">Bison Advisor</p>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/setup" element={<Setup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
