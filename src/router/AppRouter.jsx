import React, { useContext } from "react";
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login'
import Done from '../pages/Done'
import Today from '../pages/Today'
import Tags from '../pages/Tags'
import { AuthContext } from "../context";
import Week from "../pages/Week";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)
  const pages = [<Today />, <Week />, <Done />, <Tags />]
  var current_page;

  if (localStorage.getItem('activeMenu')) {
    current_page = pages.at(parseInt(localStorage.getItem('activeMenu')) - 1)
  }
  else {
    current_page = pages.at(0)
  }

  
  return (
      <Routes>
        <Route 
        path="/" 
        element={isAuth ? (current_page) : (<Login />)} />

        <Route 
        path="/Today" 
        element={isAuth ? (<Today />) : (<Login />)} />

        <Route 
        path="/Week" 
        element={isAuth ? (<Week />) : (<Login />)} /> 

        <Route 
        path="/Done" 
        element={isAuth ? (<Done />) : (<Login />)} /> 

        <Route 
        path="/Tags" 
        element={isAuth ? (<Tags />) : (<Login />)} /> 

        <Route 
        path="/login" 
        element={isAuth ? (<Today />) : (<Login />)} />
      </Routes>
    );
};

export default AppRouter;