import { Turn as Hamburger } from 'hamburger-react'
import { AiFillHome, AiOutlineUser, AiOutlinePoweroff, AiFillShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { UseCartContext } from '../cart/components/CartContext';
import { useState } from 'react';

const Header = () => {
    const { cart, accountUser, logout } = UseCartContext()
    const [isOpen, setOpen] = useState(false)

    const CartWidget = () => {
        if (cart.length >= 1) {
            return (<small>{cart.length}</small>)
        } return (" ")
    }

    const handleClick = (toggled) => {
        const nav = document.querySelector('#nav')
        const backdrop = document.querySelector('.backdrop')
        toggled ? nav.classList.add('nav-active') : nav.classList.remove('nav-active')
        toggled ? backdrop.classList.add('backdrop-active') : backdrop.classList.remove('backdrop-active')
        setOpen(!isOpen)
    }

    const onClick = () => {
        if (window.screen.width <= 768) {
            handleClick()
        }
    }

    return (
        <header>
            <div className="backdrop" onClick={onClick}>  </div>

            <nav>
                <div className="nav-logo">
                    <NavLink end to={'/home'}>
                        <h1>
                            Project
                        </h1>
                    </NavLink>
                    <img src={require('../../images/sanji-icon-smile.png')} />
                </div>
                <ul id='nav' className="nav-items">
                    <li className='nav-links'>
                        <NavLink onClick={onClick} end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/home'} >
                            <AiFillHome /> Home
                        </NavLink>
                        <NavLink onClick={onClick} end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/category/sanji'}>
                            <AiFillShop /> Sanji
                        </NavLink>
                        <NavLink onClick={onClick} end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/category/usopp'} >
                            <AiFillShop /> Usopp
                        </NavLink>
                        <NavLink onClick={onClick} end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/category/zoro'} >
                            <AiFillShop /> Zoro
                        </NavLink>
                        {
                            !accountUser.logged ?
                                <NavLink onClick={onClick} end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/account/login'} >
                                    <AiOutlineUser />Log In
                                </NavLink>
                                :
                                <>
                                    <NavLink onClick={onClick} end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/products/favList'} >
                                        <AiOutlineUser />Wish List
                                    </NavLink>
                                    <button className='link' type='button' onClick={logout}>
                                        <AiOutlinePoweroff />Log Out
                                    </button>
                                </>

                        }

                        <NavLink end className='link-shop' to={'/cart'}>
                            <AiOutlineShoppingCart title={'Ir al Carrito'} />
                            <CartWidget />
                        </NavLink>

                    </li>

                </ul>


                <div className='btn-burger'>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        onToggle={handleClick}
                    />
                </div>
            </nav>


        </header>
    )
}

export default Header