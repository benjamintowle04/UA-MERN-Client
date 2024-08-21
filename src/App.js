import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import HomePage from './components/HomePage.js';
import CoachPage from './components/CoachPage.js';
import React, { useState, useEffect } from 'react'
import AdvancedAthletics from './components/AdvancedAthletics.js';
import AccessibleAthletics from './components/AccessibleAthletics.js';
import ActiveAthletics from './components/ActiveAthletics.js';
import Footer from './components/Footer.js';
import ListCoaches from './components/ListCoaches.js';
import GetInvolved from './components/GetInvolved.js';
import ViewCoaches from './components/ViewCoaches.js';



function App() {
  const [selectedCoach, setSelectedCoach] = useState("")
  const [currentPage, setCurrentPage] = useState("HomePage")

  //For list coaches to determine if the page was rendered from advanced, accessible, or active
  const [callingPage, setCallingPage] = useState("")


  const handleSelectCoach = (coachId) => {
    setCurrentPage("CoachPage")
    setSelectedCoach(coachId)
  }

  const handleSelectTab = (tab) => {
    console.log("Tab = ", tab)
    setCurrentPage(tab)
  }

  const handleSelectAdvanced = () => {
    console.log("Selected Advanced")
    setCurrentPage("AdvancedAthletics")
  }

  const handleSelectAccessible = () => {
    console.log("Selecting Accessible")
    setCurrentPage("AccessibleAthletics")
  }

  const handleSelectActive = () => {
    console.log("Selecting Active")
    setCurrentPage("ActiveAthletics")
  }

  //For List Coaches - routed from Advanced, Accessible, or Active Pages
  const handleViewCoaches = (page) => {
    console.log("Viewing Coaches")
    setCallingPage(page)
    console.log("Calling Page = ", callingPage)
    //navigate(`/list-coaches/${callingPage}`)
  }

  const handleViewAllCoaches = () => {
    console.log("Viewing All Coaches")
    setCurrentPage("ViewCoaches")
  }



  return (
    <Router>
      <div className="App">
        <Navigation onSelectTab={handleSelectTab}/>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/coach/:coachId" element={<CoachPage />} />
          <Route path="/advanced" element={<AdvancedAthletics/>} />
          <Route path="/accessible" element={<AccessibleAthletics />} />
          <Route path="/active" element={<ActiveAthletics/>} />
          <Route path="/list-coaches/:callingPage" element={<ListCoaches/>} />
          <Route path="/get-involved" element={<GetInvolved/>} />
          <Route path="/view-coaches" element={<ViewCoaches />} />
        </Routes>


        <Footer />

      </div>
    </Router>
  );
}

export default App;
