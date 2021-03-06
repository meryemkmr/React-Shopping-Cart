import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import  './layout.css'
import { connect } from 'react-redux'
import { addToCart ,dataFetch} from '../../actions/cartActions'
 const Navbar = (props)=>{
     useEffect(() => {
        addToCart()
         
     }, [])
    return(
            <nav className="nav-wrapper  amber darken-4">
                <div className="container">
                    <Link to="/" className="brand-logo "><>Shopping Cart</></Link>
                    
                    <ul className="right nav">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My Cart </Link></li>
                        <li><Link to="/cart"><i className="material-icons">card_giftcard </i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

const mapStateToProps = (state)=>{
    return {
        products:state.products
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        
        addToCart: (id)=>{dispatch(addToCart(id))},
        dataFetch: (data)=>{dispatch(dataFetch(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)