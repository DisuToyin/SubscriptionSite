import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./pages/Signin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
