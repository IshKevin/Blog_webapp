import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './components/Signupform';
import Login from './Login';
import DashBoard from './DashBoard';
import SinglePost from './SinglePost';
import Manage from './components/Manage';
import Newpost from './components/Newpost';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="*" element={<DashBoard/>}/>
      <Route path="SinglePost" element={<SinglePost/>}/>
      <Route path="Manage" element={<Manage/>}/>
      <Route path="Newpost" element={<Newpost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
