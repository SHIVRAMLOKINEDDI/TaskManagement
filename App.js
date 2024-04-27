import './App.css';
import Header from './Components/Header';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home'
import Visitor from './Components/Visitor';
import Counsellor from './Components/Counsellor';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import FetchRegistrations from './Components/FetchRegistrations';
import Signupsuccess from './Components/Signupsuccess';
import HomePage from './Components/HomePage';
import Invalid from './Components/Invalid';
import Logout from './Components/Logout';
function App() {
  return <React.Fragment>
      <header>
        <Header/>
        
        </header>
        

        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/signup' element={<Signup/>} exact/>
            <Route path='/signin' element={<Signin/>} exact/>
            <Route path='/Appointment' element={<Appointment/>} exact/>
            <Route path='/Visitor' element={<Visitor/>} exact/>
            <Route path='/add-counsellor' element={<Counsellor/>} exact/>
            <Route path='/Contact' element={< Contact/>} exact/>
          <Route path='/Fetch-Registrations' element={< FetchRegistrations/>} exact/>
          <Route path='/Signupsuccess' element={< Signupsuccess/>} exact/>
          <Route path='/Homepage' element={< HomePage/>} exact/>
          <Route path='/Invalid' element={< Invalid/>} exact/>
          <Route path='/Logout' element={< Logout/>} exact/>

         
          </Routes>
        </main>
       <Footer/>
  </React.Fragment>
}

export default App;