import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import {useSelector} from 'react-redux';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import { selectUserName } from "./features/user/userSlice";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/" element={!userName ? <Login /> : <Navigate to='/home' replace/>} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
