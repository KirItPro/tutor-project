import './components/style.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Kit from './components/Kit/Kit';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Tests from './components/Tests/Tests';
import VideoCourse from './components/VideoCourse/VideoCourse';

function App() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="app">
      <Header active={activeModal} setActive={setActiveModal}/>
      <Contacts active={activeModal} setActive={setActiveModal}/>

        <Routes>
          <Route path='/' element={ <><Home/> <Kit/> <Reviews/></>}/>
          <Route path='videocourse' element={<VideoCourse/>}/>
          <Route path='tests' element={<Tests/>}/>
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
