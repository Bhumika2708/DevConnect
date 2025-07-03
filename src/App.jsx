import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (username === '') return;

      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error('User not found');
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        setUserData(null);
        console.error('Error fetching:', error.message);
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

      {userData && (
        <>
          <ProfileCard user={userData} />
          <RepoList username={username} />
        </>
      )}
    </div>
  );
}

export default App;
