import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Error from './Pages/Error';
import NavvBbar from './Components/NavvBbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <NavvBbar />
      <h1>chkpt API</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<Profile />} />
        <Route path='/admin' element={ <PrivateRoute isAuth={isAuth} />}>
              <Route path='/admin' element={<Admin />} />
              </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
