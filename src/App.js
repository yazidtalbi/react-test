import React, {useEffect, useState, Suspense } from "react";
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './js/components/NavBar';

import Home from './js/pages/Home';
import Posts from './js/pages/Posts.js';
import Login from './js/pages/Login';

import Loading from './js/components/Misc/Loading';
import { AuthContext } from  './js/contexts/AuthContext';
import { getAuth } from './js/utils/getAuth';

function App() {
  // Authentification pour private routes 
   const [auth, setAuth] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    auth && setAuth(auth)
  }, []);
  return (
     <AuthContext.Provider value={{ auth, setAuth }}>
      <NavBar />
       <Suspense fallback={<Loading />}>
        <Routes>
        <Route path='/' element={<Home />} />
        {auth ? (
             <Route path='posts' element={<Posts />} exact/>
        ) : (
             <Route path='login' element={<Login />} exact/>
        )}            
               <Route
        path="**"
        element={<Navigate to="/" replace />}
    />
      </Routes>
      </Suspense>
     
  </AuthContext.Provider>
    
  );
}

export default App;
