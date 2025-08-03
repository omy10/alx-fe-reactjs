import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './components/Search';

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>This is the About Page</h2>;
}

function App() {
  return (
    
    <Router>
      <div className="container">
        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <hr />
        <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
