import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import DownloadsPage from './Pages/DownloadsPage';
import AboutUsPage from './Pages/AboutUsPage';
// import ProjectsPage from './components/pages/ProjectsPage';
// import AboutUsPage from './components/pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/downloads/' exact element={<DownloadsPage />} />
            <Route path='/about-us/' exact element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
