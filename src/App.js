import logo from './images/logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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

  const handleViewCoaches = (page) => {
    console.log("Viewing Coaches")
    setCallingPage(page)
    console.log("Calling Page = ", callingPage)
  }

  const handleViewAllCoaches = () => {
    console.log("Viewing All Coaches")
    setCurrentPage("ViewCoaches")
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          {/* Enhanced SEO tags with expanded keywords */}
          <Helmet>
            <title>Universal Athletics - Youth Sports Training Programs</title>
            <meta name="description" content="UA Athletics offers personalized coaching and training for athletes of all abilities. Find affordable sports programs, expert coaches, and inclusive athletic training for beginners to advanced athletes." />
            <meta name="keywords" content="universal, athletics, universal athletics, Universal Athletics, sports coaching, athletic training, personal coach, basketball training, football coaching, baseball instruction, volleyball lessons, soccer training, tennis coaching, swimming lessons, track and field, gymnastics, adaptive sports, inclusive athletics, sports for beginners, advanced athletic training, affordable coaching, youth sports programs, adult fitness classes, sports skills development, athletic performance, sports conditioning, strength training for athletes, agility training, speed development, sports nutrition, athletic rehabilitation, sports psychology, team building activities, private coaching sessions, group training, sports camps, athletic clinics, sports for disabled athletes, accessible sports facilities, athletic scholarships, sports mentoring, athletic assessment, sports technique improvement, competitive sports training, recreational athletics, fitness for seniors, children's sports programs, sports injury prevention, athletic equipment, sports community, local coaches, online training programs, sports education, athletic development" />
            <meta name="author" content="UA Athletics" />
            <link rel="icon" href={logo} type="image/png" />
            
            {/* Open Graph tags for social sharing */}
            <meta property="og:title" content="Universal Athletics - Find Your Perfect Sports Coach & Training Program" />
            <meta property="og:description" content="Discover personalized sports coaching for all abilities. UA Athletics offers advanced, accessible, and active training programs with flexible pricing and expert coaches." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://universal-athletics.netlify.app/" />
            <meta property="og:image" content="https://universal-athletics.netlify.app/logo.png" />
            
            {/* Twitter Card data */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Universal Athletics - Sports Training & Coaching" />
            <meta name="twitter:description" content="Find your perfect sports coach with UA Athletics. Personalized training for all abilities and sports." />
            <meta name="twitter:image" content="https://universal-athletics.netlify.app/logo.png" />
            
            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href="https://universal-athletics.netlify.app/" />
            
            {/* Geo tags if you have physical locations */}
            <meta name="geo.region" content="US" />
            <meta name="geo.placename" content="Your City" />
          </Helmet>

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
    </HelmetProvider>
  );
}

export default App;
