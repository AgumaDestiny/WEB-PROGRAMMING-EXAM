// import { click } from '@testing-library/user-event/dist/click';
import React, { useState}from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                   GDSC 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                {/* //for the menu to disappear */}
                <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-links' onclick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/socials' className='nav-links' onclick={closeMobileMenu}>
                            Social Networks
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/members' className='nav-links' onclick={closeMobileMenu}>
                            Members
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onclick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/feedback' className='nav-links' onclick={closeMobileMenu}>
                            FeedBack
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signin' className='nav-links' onclick={closeMobileMenu}>
                            SignIn
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar

