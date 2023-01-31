import Header from './components/Header';
import Photocase from './components/Photocase';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './components/Signup';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
