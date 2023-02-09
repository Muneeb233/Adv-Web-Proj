import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin 

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    
    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" >Logout</Link></li>
            </>
        )
    }

     return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin': 'Ecommerce Shop'}Ecommerce shop</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/" >{isAdmin ? 'Products': ' Shop'}</Link></li>
                
                {isAdmin && adminRouter}{               
            
                isLogged ? loggedRouter : <li><Link to="/login" >Login ✪</Link><Link to="/register" > Register </Link></li>
            
                }

                <li><img src={Close} alt="" width="30" /></li>
            </ul>
            <div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                    </Link>
            </div>
        </header>
    )
}

export default Header