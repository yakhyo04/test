import './App.css';
import Left from './Components/Left/Left';
import Top from './Components/Top/Top';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Swiper from './Components/Swiper/Swiper';

function App() {
  return (
    <div className="container">
      <div className="app__div">
      <Left/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/trending" element={<Profile/>}/>
        <Route path="/swipper" element={<Swiper/>}/>
      </Routes>
      <Top/>
      </div>
    </div>
  );
}

export default App;
