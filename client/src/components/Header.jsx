import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Chat Application</h1>
            <nav className="flex justify-center space-x-4">
                <a href="/" className="text-blue-500 hover:underline">Home</a>
                <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a>
                <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a>
                <a href="/profile" className="text-blue-500 hover:underline">Profile</a>
            </nav>
        </div>
    </header>
  )
}
