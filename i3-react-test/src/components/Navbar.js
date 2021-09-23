import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'arrow up' : 'arrow down'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links ' onClick={closeMobileMenu}>
             FirstPage
            </Link>
          </li> 
          <li className='nav-item'>
            <Link to='/secondpage' className='nav-links' onClick={closeMobileMenu}>
             SecondPage
            </Link>
            
          </li> 
          
          
          
          </ul>  
        </nav>
    
        </>
    )
}

export default Navbar
