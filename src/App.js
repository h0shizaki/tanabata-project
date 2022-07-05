import './App.css';

import { Route, Routes } from "react-router-dom";
import Announcement from "react-popup-announcement";
import Navbar from "./components/Navbar.jsx";
import img from "./static/img/pic5.png";

import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Wish from './pages/Wish' ;

import { Context } from './lib/Provider';
import { useContext } from 'react';

function App() {
  const [state] = useContext(Context);
  

  return (
    <div className='background App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/wish" element={<Wish wishing={state.wishing}/>}></Route>
      </Routes>

      <Announcement
        title="Welcome to 七夕"
        subtitle="Star festival project. "
        link="https://github.com/h0shizaki/tanabata-project"
        onBannerClick = {()=> {
          //go to some page maybe repo
          window.location.href = "https://github.com/h0shizaki/tanabata-project";
        }}
        imageSource={img}
        buttonText="Repository"
        daysToLive={1}
        secondsBeforeBannerShows={0}
        closeIconSize={30}
        animateInDuration={2000}
        animateOutDuration={500}
      />

    </div>
  );
}

export default App;
