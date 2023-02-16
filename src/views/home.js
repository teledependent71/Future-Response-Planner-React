import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Response Planner</title>
        <meta property="og:title" content="Future Response Planner" />
      </Helmet>
    </div>
  )
}

export default Home
