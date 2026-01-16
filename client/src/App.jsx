import { BrowserRouter, Routes, Route } from "react-router-dom";
import InternshipRegister from "./pages/Register/InternshipRegister";
import CompanyProject from "./pages/ProjectRegister/CompanyProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-internship" element={<InternshipRegister />} />
        <Route path="/register-project" element={<CompanyProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
