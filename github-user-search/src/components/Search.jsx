import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">Advanced GitHub Search</h2>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Min Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
