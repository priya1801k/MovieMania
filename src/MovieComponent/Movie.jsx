import React from 'react';
// import Favorite from './Favorite';
import Home from './Home';
import PageNotFound from './PageNotFound';
import {  Navigate, Route, Routes } from 'react-router-dom';
import './Movie.css';
import Favorite from './Favorite';

function Movie() {

  
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/favorite" element={<Favorite/>} />
        <Route path="/" element={<Navigate to="/home" replace/>}/>
        {/* <Route path="/favorite/Action" element={<Action/>}/> */}
        <Route component={PageNotFound}  />
      </Routes>
    </div>
  );
}


export default Movie;