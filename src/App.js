import './components/style.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Kit from './components/Kit/Kit';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import SingUp from './components/SingUp/SingUp';
import Tests from './components/Tests/Tests';
import VideoCourse from './components/VideoCourse/VideoCourse';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="app">
      <Header active={activeModal} setActive={setActiveModal}/>
      <Contacts active={activeModal} setActive={setActiveModal}/>

        <Routes>
          <Route path='tutor-project' element={ <><Home/> <Kit/> <Reviews/></>}/>
          <Route path='tutor-project/videocourse' element={<VideoCourse/>}/>
          <Route path='tutor-project/tests' element={<Tests/>}/>
          <Route path='tutor-project/singUp' element={<SingUp/>}/>
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
