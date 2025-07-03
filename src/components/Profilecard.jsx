const ProfileCard = ({ user }) => {
  if (!user) return null; // Don't show if no data

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center">
      {/* Avatar */}
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-28 h-28 rounded-full border-4 border-purple-400 mb-4"
      />

      {/* Name */}
      <h2 className="text-2xl font-bold text-purple-700">
        {user.name || user.login}
      </h2>

      {/* Bio */}
      <p className="text-gray-600 mt-1">
        {user.bio || "This developer prefers mystery 🕵️‍♂️"}
      </p>

      {/* Location */}
      {user.location && (
        <p className="text-sm text-gray-500 mt-2">📍 {user.location}</p>
      )}

      {/* Followers / Following */}
      <div className="flex justify-center gap-6 mt-4">
        <div>
          <p className="font-semibold text-purple-600">{user.followers}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-semibold text-purple-600">{user.following}</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      {/* GitHub profile link */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block text-sm text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default ProfileCard;
