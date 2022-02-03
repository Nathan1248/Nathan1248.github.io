import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
// import ProjectsPage from './components/pages/ProjectsPage';
// import AboutUsPage from './components/pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
