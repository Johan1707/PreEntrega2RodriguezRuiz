import { useState } from 'react'
import { Link } from 'react-router-dom'

import { categories } from '../../data/categories'

import '../../style/navbar.css'

import { Logo } from './Logo'
import { CarBubble } from './CarBubble'

export const Navbar = () => {
    const [overCategori, setOverCategori] = useState(false)

    return (
        <div className='mainmenu_area'>
            <div className='container'>                
                <div className='mainlogo_area'>
                    <div className='contentlogo'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                </div>
                <div className='mainnav_area'>
                    <nav className='mainmenu-nav'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='products'>Products</Link></li>
                            <li 
                                onMouseOver={() => setOverCategori(true)} 
                                onMouseOut={() => setOverCategori(false)}
                            >
                                <a>Categories</a>
                                {
                                    overCategori &&
                                    <ul className='categoris__menu'>
                                        <div>
                                            {categories.map(category => 
                                                <li key={category.id}>
                                                    <Link to={`category/${category.id}`}>{category.name}</Link>
                                                </li>
                                            )}
                                        </div>
                                    </ul>
                                }
                            </li>
                            <li><Link to='about'>About</Link></li>
                            <li><Link to='contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='maincar_area'>
                    <ul>
                        <li>
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        </li>
                        <li>
                            <CarBubble />
                            <button><i className="fa-solid fa-cart-shopping"></i></button>
                        </li>
                    </ul>
                </div>         
            </div>
        </div>
    )
}