import React from 'react'

export default function Home() {
  return (
    <div className='container mx-auto m-20 p-10 bg-slate-100 shadow-lg rounded-lg'>
      <h1 className="text-3xl font-bold text-center my-5">Welcome to the Chat Application</h1>
      <p className="text-center text-lg mb-2">Create your own account</p>
      <div className="flex justify-center mt-8">
        <a href="/sign-in" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</a>
        <a href="/sign-up" className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</a>
      </div>
    </div>
  )
}
