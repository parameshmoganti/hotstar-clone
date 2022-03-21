import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
