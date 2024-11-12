
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'


const NotFound = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 py-10">
     
     
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-8">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Oops! The page you are looking for doesn’t exist.</p>
        <div className="mt-6">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>

    </div>
  )
}

export default NotFound
