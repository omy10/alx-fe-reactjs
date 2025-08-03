import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Search from './components/Search';
import { searchGitHubUsers } from './services/githubService';

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function About() {
  return <h2>This is the About Page</h2>;
}
function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (criteria) => {
    const results = await searchGitHubUsers(criteria);
    setUsers(results);
  };

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
        {/* <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div> */}
    <div className="min-h-screen bg-gray-100 p-6">
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h3 className="text-lg font-bold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>

    
  );
}

// export default App;
