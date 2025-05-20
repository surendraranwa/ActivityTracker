import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./compoents/Header/Header.jsx";
import ResumeData from "./pages/ResumeData/ResumeData.jsx";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-data" element={<ResumeData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
