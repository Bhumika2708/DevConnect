import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const LanguageChart = ({ repos }) => {
  if (!repos || repos.length === 0) return null;

  // Step 1: Count how many times each language appears
  const languageCount = {};
  repos.forEach((repo) => {
    const lang = repo.language || 'Unknown';
    languageCount[lang] = (languageCount[lang] || 0) + 1;
  });

  // Step 2: Convert object to array for Recharts
  const data = Object.entries(languageCount).map(([language, count]) => ({
    language,
    count,
  }));

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
        Language Usage Chart
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="language" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#a855f7" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChart;
