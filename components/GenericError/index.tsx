const GenericError = () => {
  return (
    <div className="container h-screen m-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">500 - Internal Server Error</h1>
        <p className="text-lg text-gray-600">
          Don’t worry, we’ve been notified and will fix this issue. In the
          meantime, you can try refreshing the page or contact support.
        </p>
      </div>
    </div>
  );
};

export default GenericError;
