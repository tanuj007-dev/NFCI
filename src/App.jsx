import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-2 left-0 w-full z-50">
        <Navbar />
      </div>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
