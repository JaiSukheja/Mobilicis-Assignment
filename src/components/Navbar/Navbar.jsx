import React, { useContext } from 'react'
import './Navbar.scss'
import { dataContext } from '../../context'

const Navbar = () => {
    const {data,setdataFunc} = useContext(dataContext)
    const handleClick = (query) =>{
        console.log(data)
        setdataFunc(query);
    }
  return (
    <div className='navbar'>
        <div className='head'>ASSIGNMENT</div>
        <div className='query' onClick={handleClick("first")}>Query-1</div>
        <div className='query' onClick={handleClick("first")}>Query-2</div>
        <div className='query' onClick={handleClick("first")}>Query-3</div>
        <div className='query' onClick={handleClick("first")}>Query-4</div>
        <div className='query' onClick={handleClick("first")}>Query-5</div>
    </div>
  )
}

export default Navbar