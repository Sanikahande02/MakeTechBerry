import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#E7DEFE] min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
