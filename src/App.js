import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './components/Signupform';
import Login from './Login';
import DashBoard from './DashBoard';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="*" element={<DashBoard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
