import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/Profilecard';
import RepoList from './components/RepoList';
import LanguageChart from './components/LanguageChart';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

 
  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;

      setLoading(true);
      setError('');
      setUserData(null);
      setRepos([]);

      try {
       
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('User not found');
        const user = await userRes.json();
        setUserData(user);

        
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repoData = await repoRes.json();

        const topRepos = repoData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);

        setRepos(topRepos);
      } catch (err) {
        console.error(err.message);
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <h1 className="text-3xl text-center font-bold text-purple-700">
        DevConnect 🔍
      </h1>

      <SearchBar onSearch={setUsername} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && userData && (
        <>
          <ProfileCard user={userData} />
          <RepoList repos={repos} />
          <LanguageChart repos={repos} />
        </>
      )}
    </div>
  );
}

export default App;
