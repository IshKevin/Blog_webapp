import Header from './components/Header';
import Photocase from './components/Photocase';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="Signup" element={<Photocase/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
