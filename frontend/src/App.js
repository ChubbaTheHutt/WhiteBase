import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';


import MainNavigation from './Shared/components/Navigation/MainNavigation';
import Home from './pages/Home';


import UserProfile from './Users/pages/UserProfile';
import DeckEditor from './Decks/pages/DeckEditor';

import CardSearch from './Cards/pages/CardSearch';
import CardProfile from './Cards/pages/CardProfile';


import AuthLayout from './Auth/layout/AuthLayout';
import Login from './Auth/pages/Login';
import Register from './Auth/pages/Register';


function App() {
  return (

    <Router>
      <MainNavigation />
      {/* SHARED NAVIGATION BAR */}
      <main>
        <Routes>
          {/* LANDING PAGE */}
          <Route path="/home" element={<Home />} />
          
          {/* USER LOGIN AND REGISTRATION */}
          <Route element={<AuthLayout />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* DATABASE INTERFACE + CARD SEARCH */}
          <Route path="/search" element={<CardSearch />} />
          {/* INDIVIDUAL CARD PAGE */}
          <Route path="/card/:cardId" element={<CardProfile />} />

          {/*USER PROFILE and ENDPOINTS  */}
          <Route path="/user">
            {/* USER PROFILE, LIST VIEW OF CREATED DECKS */}
            <Route index element={<UserProfile />} />
            {/* VIEW SELECT DECK AND EDIT */}
            <Route path="decks/:deckId" element={<DeckEditor />} />
          </Route>

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </Router>

  )
}

export default App;