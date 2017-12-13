import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>home screen</h1>
      <p>googling stuff blah blah</p>
      <Link to="/about">About</Link>
    </div>
    )
}

export default Home
