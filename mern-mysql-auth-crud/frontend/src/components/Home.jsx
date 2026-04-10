
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
          <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
            <div className="relative">
              <svg
                viewBox="0 0 48 48"
                className="absolute right-0 bottom-0 h-40 w-40 opacity-25"
              >
                <path
                  fill="#fff"
                  d="M47.1,23.8c0.8-0.4,1.2-1.3,0.9-2.2c-0.6-2-1.8-3.7-3.5-5.1c-1.4-1.1-3.1-1.7-4.9-1.8
c-1.4-0.1-2.8,0.3-4,0.9c-1.8,1-3.1,2.5-3.9,4.4c-0.5,1.2-0.5,2.4-0.1,3.6c0.4,1.1,1.1,2.1,2,2.9s1.9,1.4,3,1.8
c1.1,0.5,2.2,0.6,3.3,0.4c1-0.3,1.9-0.8,2.7-1.5c0.8-0.7,1.4-1.6,1.8-2.6c0.5-1,0.6-2,0.3-3C48.5,24.8,47.8,24.3,47.1,23.8z
 M24.2,37.2c-0.2,0.9-0.8,1.7-1.6,2.2c-1.3,0.8-2.8,1.1-4.3,0.8c-1.3-0.2-2.5-0.8-3.5-1.7c-1.1-0.9-1.9-2.1-2.4-3.4
c-0.5-1.3-0.6-2.6-0.3-3.9c0.4-1.1,1-2.1,1.8-2.9c0.8-0.8,1.8-1.4,2.9-1.8c1.1-0.4,2.2-0.4,3.3,0.1c1,0.5,1.9,1.2,2.6,2
s1.3,1.8,1.7,2.9C24.7,35.8,24.6,36.5,24.2,37.2z M20.7,16.8c-1.4,0.1-2.7,0.7-3.8,1.7s-1.8,2.1-2.2,3.5
c-0.5,1.5-0.4,3-0.1,4.5c0.3,1.4,0.9,2.7,1.7,3.8s1.7,1.9,2.8,2.4c1.1,0.5,2.3,0.6,3.4,0.4c1-0.3,1.9-0.9,2.7-1.7
c0.8-0.8,1.4-1.8,1.8-2.9c0.5-1.1,0.5-2.2,0.2-3.3c0.4,1.1,1.1,2.1,1.8,2.9c0.8,0.8,1.9,1.4,3.1,1.7c1.1,0.3,2.3,0.2,3.4-0.3
c1.1-0.5,2-1.3,2.7-2.3c0.7-1.1,1.1-2.3,1.2-3.6c0.1-1.3-0.2-2.6-0.8-3.8c-0.6-1.3-1.6-2.4-2.7-3.2s-2.5-1.2-4-1.3
C24.1,16.4,22.1,16.4,20.7,16.8z"
                />
              </svg>
              <div className="relative">
                <h1 className="h2 mb-4 text-5xl text-center text-white font-bold tracking-tight">
                  MERN MySQL Dashboard
                </h1>
                <p className="mb-8 text-xl text-white/80 text-center max-w-3xl mx-auto leading-relaxed">
                  Complete authentication system with CRUD operations. Secure JWT, responsive design, production-ready.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Started →
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-white/10 backdrop-blur-sm"></div>
    </div>
  )
}

export default Home


