import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import UserProfile from './Users/pages/UserProfile';
import CardSearch from './Cards/pages/CardSearch';
import CardProfile from './Cards/pages/CardProfile';

function App() {
  return (
  
    <Router>
      <Nav />
      {/* SHARED NAVIGATION BAR */}

      <Routes>
        {/* LANDING PAGE */}
        <Route path="/home" exact element={<Home />} />
        {/* USER LOGIN AND REGISTRATION */}
        <Route element={<AuthLayout />} >
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Route>
        {/* DATABASE INTERFACE + CARD SEARCH */}
        <Route path="/search" exact element={<CardSearch />} />
        {/* INDIVIDUAL CARD PAGE */}
        <Route path="/card/:cardId" exact element={<CardProfile />} />
        
        {/*USER PROFILE and ENDPOINTS  */}
        <Route path="/user" exact>
          {/* USER PROFILE, LIST VIEW OF CREATED DECKS */}
          <Route index element={<UserProfile />} /> 
          {/* VIEW SELECT DECK AND EDIT */}
          <Route path="/decks/:deckid" element={<DeckEditor />}/>
        </Route>
        
        <Route path="*" element={<Navigate to="/home" replace/>} />
      </Routes>
    </Router>
  
  )
}