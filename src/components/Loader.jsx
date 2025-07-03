const Loader = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-4 animate-pulse">
      
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
      </div>

      
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>


      <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>

      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mt-2"></div>

      <div className="flex justify-center gap-6 mt-4">
        <div className="w-12 h-4 bg-gray-300 rounded"></div>
        <div className="w-12 h-4 bg-gray-300 rounded"></div>
      </div>


      <div className="h-8 bg-gray-300 rounded-full w-1/2 mx-auto mt-4"></div>
    </div>
  );
};

export default Loader;
