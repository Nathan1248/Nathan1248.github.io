import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import DownloadsPage from './Pages/DownloadsPage';
import AboutUsPage from './Pages/AboutUsPage';
import PublicationsPage from './Pages/PublicationsPage';
import FeaturesPage from './Pages/FeaturesPage';
import ResourcesPage from './Pages/ResourcesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/downloads/' exact element={<DownloadsPage />} />
            <Route path='/about-us/' exact element={<AboutUsPage />} />
            <Route path='/publications/' exact element={<PublicationsPage />} />
            <Route path='/features/' exact element={<FeaturesPage />} />
            <Route path='/resources/' exact element={<ResourcesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
