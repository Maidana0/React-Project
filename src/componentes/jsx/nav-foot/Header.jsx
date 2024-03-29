import { Turn as Hamburger } from 'hamburger-react'
import { AiFillHome, AiOutlineUser, AiOutlinePoweroff, AiFillInfoCircle, AiFillShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { UseCartContext } from '../cart/components/CartContext';

const Header = () => {
    const { cart, accountUser, logout } = UseCartContext()
    const CartWidget = () => {
        if (cart.length >= 1) {
            return (<small>{cart.length}</small>)
        } return (" ")
    }

    return (
        <header>
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
                        <NavLink end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/home'} >
                            <AiFillHome /> Home
                        </NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/category/sanji'}>
                            <AiFillShop /> Sanji
                        </NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/category/usopp'} >
                            <AiFillShop /> Usopp
                        </NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/category/zoro'} >
                            <AiFillShop /> Zoro
                        </NavLink>
                        {
                            !accountUser.logged ?
                                <NavLink end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/account/login'} >
                                    <AiOutlineUser />Log In
                                </NavLink>
                                :
                                <>
                                    <NavLink end className={({ isActive }) => isActive ? "link focus-item" : "link"} to={'/products/favList'} >
                                        <AiOutlineUser />Wish List
                                    </NavLink>
                                    <button className='link' type='button' onClick={logout}>
                                        <AiOutlinePoweroff />Log Out
                                    </button>
                                </>

                        }

                        {/* <NavLink end className={ ({isActive}) => isActive? "link focus-item" : "link" }>
                        <AiFillInfoCircle /> About
                    </NavLink> */}

                        <NavLink end className='link-shop' to={'/cart'}>
                            <AiOutlineShoppingCart title={'Ir al Carrito'} />
                            <CartWidget />
                        </NavLink>

                    </li>

                </ul>


                <div className='btn-burger'>
                    <Hamburger
                        onToggle={toggled => {
                            const nav = document.querySelector('#nav')
                            toggled ? nav.classList.add('nav-active') : nav.classList.remove('nav-active')
                        }}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Header