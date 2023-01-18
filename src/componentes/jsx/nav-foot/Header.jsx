import { Turn as Hamburger } from 'hamburger-react'
import {  AiFillHome, AiFillInfoCircle, AiFillShop, AiOutlineShoppingCart} from 'react-icons/ai';
import { NavLink} from 'react-router-dom';
import {UseCartContext} from '../cart/components/CartContext';

const Header = ()=>{
    const {cart} = UseCartContext()
    const CartWidget = ()=>{
        if(cart.length >=1 ){
            return(<small>{cart.length}</small>)
        }return(" ")
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
                <img src={require('../../images/sanji-icon-smile.png')}/>
            </div>
            <ul id='nav' className="nav-items">
             <li className='nav-links'> 
                    <NavLink end className={ ({isActive}) => isActive? "link focus-item" : "link" } to={'/home'} > 
                        <AiFillHome /> Home 
                    </NavLink>
                    <NavLink end className={ ({isActive}) => isActive? "link focus-item" : "link" }  to={'/sanji'}>
                        <AiFillShop /> Category 1     
                        </NavLink>
                    <NavLink end className={ ({isActive}) => isActive? "link focus-item" : "link" }   to={'/zoro'} >
                        <AiFillShop />Category 2      
                    </NavLink>
                    <NavLink end className={ ({isActive}) => isActive? "link focus-item" : "link" }   to={'/usopp'} >
                        <AiFillShop />Category 3     
                    </NavLink>
                    {/* <NavLink end className={ ({isActive}) => isActive? "link focus-item" : "link" }>
                        <AiFillInfoCircle /> About
                    </NavLink> */}

                    <NavLink end className='link-shop' to={'/cart'}>
                        <AiOutlineShoppingCart/>
                        <CartWidget />
                    </NavLink>
                </li>

            </ul>


            <div className='btn-burger'>
                <Hamburger 
                    onToggle={toggled => { 
                        const nav = document.querySelector('#nav')
                        toggled ? nav.classList.add('nav-active') : nav.classList.remove ('nav-active')    
                    }}  
                    />
            </div>
        </nav>
    </header>
)
}

export default Header