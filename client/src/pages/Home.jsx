import React from 'react'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Welcome to the Chat Application</h1>
      <p className="text-center text-gray-600">This is a simple chat application built with the MERN stack.</p>
      <div className="flex justify-center mt-8">
        <a href="/sign-in" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</a>
        <a href="/sign-up" className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</a>
      </div>
    </div>
  )
}
