const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded-lg max-w-md mx-auto mt-6 text-center">
      ⚠️ {message}
    </div>
  );
};

export default ErrorMessage;
