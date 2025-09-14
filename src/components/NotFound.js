import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-400 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Go Home
          </Link>
          
          <div className="text-gray-400 text-sm">
            <p>Or contact me directly:</p>
            <a 
              href="mailto:rakeshpalla364@gmail.com"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              rakeshpalla364@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
