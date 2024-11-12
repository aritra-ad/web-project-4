import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Carnival from '../components/Carnival'
import OnlineShopping from '../components/OnlineShopping'
import Workshop from '../components/Workshop'
import Newletters from '../components/Newletters'
import Music from '../components/Music'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Carnival/>
      <OnlineShopping/>
      <Workshop/>
      <Newletters/>
      <Music/>
      <Footer/>
    </div>

  )
}

export default page