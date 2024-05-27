import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <a href="/" className="text-blue-500 hover:underline">
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
