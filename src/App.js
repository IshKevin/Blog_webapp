import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './components/Signupform';
import Login from './Login';
import DashBoard from './DashBoard';
import SinglePost from './SinglePost';
import Manage from './components/Manage';
import Newpost from './components/Newpost';
import Dash2disp from './Dash2disp';
import Dashhome from './Dashhome';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    const response = await axios.get('https://newblog-m4im.onrender.com/api/posts');
    setPosts(response.data.data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Home posts={posts}/>
      }/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="dashBoard" element={<DashBoard posts={posts}/>}/>
      <Route path="/:blogId" element={<SinglePost posts={posts}/>}/>
      <Route path="Manage" element={<Manage posts={posts}/>}/>
      <Route path="Newpost" element={<Newpost posts={posts}/>}/>
      <Route path="dash2disp" element={<Dash2disp posts={posts}/>}/>
      <Route path="Dashhome" element={<Dashhome/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
