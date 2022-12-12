import { Turn as Hamburger } from 'hamburger-react'
import {  AiFillHome, AiFillInfoCircle, AiFillShop, AiOutlineShoppingCart} from 'react-icons/ai';



const Header = ()=>{
    const CartWidget = (props)=>{
        if(Number(props.items)>=1){
            return(<small>{props.items}</small>)
        } else{return(" ")}
    }

return (
    <header>
        <nav>
            <div className="nav-logo">
                <h1>
                    Project
                </h1>
                <img src={require('../../imagenes/sanji-icon-smile.png')}/>
            </div>

            <ul id='nav' className="nav-items">
             <li className='nav-links'> 
                    <a className="link focus-item"> <AiFillHome /> Home</a>
                    <a className="link "><AiFillShop /> Category 1</a>
                    <a className="link" ><AiFillShop />Category 2</a>
                    <a className="link"><AiFillShop />Category 3</a>
                    {/* <a className="link"><AiFillInfoCircle /> About</a> */}
                    <a className='link-shop'> <AiOutlineShoppingCart/>
                        <CartWidget  items={1} />
                    </a>
                </li>

            </ul>
            
            <div className='btn-burger'>
                <Hamburger 
                    onToggle={toggled => { 
                        const nav = document.querySelector('#nav')
                        toggled ? nav.classList.add('nav-active') : nav.classList.remove ('nav-active')    
                    }}  />
            </div>
        </nav>
    </header>
)
}

export default Header