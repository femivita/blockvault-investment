import { Routes, Route } from 'react-router-dom';
import LandingPage from './Dashboard';
import Login from './LoginPage';
import Navbar from './components/Navbar';
import RegisterPage from './RegisterPage';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
  );
}

export default App;