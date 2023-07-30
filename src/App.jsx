import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Info from './components/info/Info'
import Lounge from './components/Lounge/Lounge'
import Travellers from './components/Travellers/Travellers'
import Subscribers from './components/Subscribers/Subscribers'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travellers/>
      <Subscribers/>
      <Footer/>
    </div>
  )
}

export default App;