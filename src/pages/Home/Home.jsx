import React from 'react'
import './Home.scss'
import DataPreviewer from '../../components/DataPreviewer/DataPreviewer'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
        <DataPreviewer/>
    </div>
  )
}

export default Home