import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import LanguageChart from './components/LanguageChart';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  // Fetch user profile
  useEffect(() => {
    const fetchUser = async () => {
      if (username === '') return;

      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error('User not found');
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        setUserData(null);
        console.error('Error fetching user:', error.message);
      }
    };

    fetchUser();
  }, [username]);

  // Fetch top 5 repos
  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) return;

      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();

        const topRepos = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);

        setRepos(topRepos);
      } catch (error) {
        console.error('Error fetching repos:', error.message);
        setRepos([]);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <h1 className="text-3xl text-center font-bold text-purple-700">
        DevConnect 🔍
      </h1>

      <SearchBar onSearch={setUsername} />

      {userData && (
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
