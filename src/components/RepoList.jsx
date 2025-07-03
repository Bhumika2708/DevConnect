import { useEffect, useState } from 'react';

const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!res.ok) throw new Error('Failed to fetch repos');
        const data = await res.json();

        const topRepos = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);

        setRepos(topRepos);
      } catch (error) {
        console.error('Error fetching repos:', error.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) {
    return <p className="text-center mt-4 text-gray-500">Loading repos...</p>;
  }

  if (repos.length === 0) {
    return <p className="text-center mt-4 text-gray-500">No repositories found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">Top Repositories</h3>

      <ul className="space-y-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-purple-600 hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-600">{repo.language || 'Unknown language'}</p>
            </div>

            <div className="text-sm text-gray-500 mt-2 md:mt-0">
              ⭐ {repo.stargazers_count}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
