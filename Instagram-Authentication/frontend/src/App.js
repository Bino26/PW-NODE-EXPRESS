import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
