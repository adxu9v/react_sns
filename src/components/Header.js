import React from 'react'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header className='header'>
            <Link to='/' ><img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"  className='logo'/></Link>
            <div className='headerWrite'><Link to='/Write'>Write</Link></div>
            </header>
    )
}
export default Header
