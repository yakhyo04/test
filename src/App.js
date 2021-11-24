import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Profile from './Components/Pages/Profile';

function App() {
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <Routes>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;