import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Signin } from "./pages/Signin";
import Home from "./pages/Home";
import { ResetPassword } from "./pages/ResetPassword";
import { RecoverPassword } from "./pages/RecoverPassword";

import { Pricing } from "./pages/Pricing";
import Onboarding from "./pages/Onboarding";
import Task from "./pages/Task";
import Project from "./pages/Project";
import SingleTask from "./pages/SingleTask";
import File from "./pages/File";
import PriceDetails from "./pages/PriceDetails";
import Plans from "./pages/Plans";

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
          <Route path="/task" element={<Task />} />
          <Route path="/task/:taskId" element={<SingleTask />} />
          <Route path="/p" element={<Project />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="pricing/:id" element={<PriceDetails />} />
          <Route path="/onboard" element={<Onboarding />} />
          <Route path="/files" element={<File />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
