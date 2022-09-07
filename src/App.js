import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Signin } from "./pages/Signin";
import Home from "./pages/Home";
import { ResetPassword } from "./pages/ResetPassword";
import { RecoverPassword } from "./pages/RecoverPassword";
import Project from "./pages/Project";
import { Pricing } from "./pages/Pricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/project" element={<Project />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
