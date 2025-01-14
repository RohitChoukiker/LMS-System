import React from 'react';
import { Ghost, HomeIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
function Error404() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -left-8 -top-8 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-60" />
          <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-indigo-200 rounded-full blur-xl opacity-60" />
          
          {/* Main content */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
            <div className="flex justify-center mb-6">
              <Ghost className="w-24 h-24 text-purple-500 animate-bounce" />
            </div>
            
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Oops! It seems like you've ventured into the unknown. The page you're looking for has vanished into thin air.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200">
                <HomeIcon className="w-5 h-5 mr-2" />
                {/* <Link to="/">Go Home</Link> */}
                <Link to="/">Go Home</Link>
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional information */}
        <p className="mt-8 text-gray-600">
          Need help? <a href="#" className="text-purple-600 hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
}

export default Error404;