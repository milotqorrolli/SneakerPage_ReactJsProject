import React from 'react'
import Home from '../components/Home/Home/Home'
import Collection from '../components/Home/Collection/Collection'
import Men from '../components/Home/Men/Men'
import About from '../components/Home/About/About'
import Women from "../components/Home/Women/Women"
function HomePage() {
  return (
    <div>
      <Home />
      <Collection />
      <Men />
      <About />
      <Women />
    </div>
  )
}

export default HomePage
