import './App.css';
import Left from './Components/Left/Left';
import Top from './Components/Top/Top';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Swiper from './Components/Swiper/Swiper';
import Picture from './Components/Picture/Picture';
import DollieProfile from './Components/Profile/DollieProfile';
import Foodprofile from './Components/Profile/FoodProfile';
import Asteroids from './Components/Special/asteroids';

function App() {
  return (
    <div className="container">
      <div className="app__div">
      <Left/>
      <Top/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/margaret" element={<Profile/>}/>
        <Route path="/swipper" element={<Swiper/>}/>
        <Route path="/picture" element={<Picture/>}/>
        <Route path="/dollieblair" element={<DollieProfile/>} />
        <Route path="/foodanddrink" element={<Foodprofile/>}/>
        <Route path="/asteroids-dollie" element={<Asteroids/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
