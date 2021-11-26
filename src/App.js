import './App.css';
import Left from './Components/Left/Left';
import Top from './Components/Top/Top';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Swiper from './Components/Swiper/Swiper';
import Picture from './Components/Picture/Picture';

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
      </Routes>
      </div>
    </div>
  );
}

export default App;
