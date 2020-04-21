import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
import './index.css';
import Shipping from './Shipping'
//import PropTypes from "prop-types";

export class Cart extends Component {
    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render() {

        //this.props.products.price 

        let addedProducts = this.props.products.length ?
        (  
            this.props.products.map(product=>{
                return(
                   
                    <li className="collection-item avatar" key={product.id}>
                                <div className="item-img"> 
                                {product.image ?
                                    <img src={product.image.url} alt={product.imgage}height="200px" /> :null}
                                </div>
                            
                                <div className="item-desc">
                                    <span className="title">{product.name}</span>
                                    {/* <p>{item.desc}</p> */}
                                    <p><b>Price: $9.99</b></p> 
                                    <p>
                                        <b>Quantity: {product.quantity}</b> 
                                    </p>
                                    <div className="add-remove">
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(product.id)}}>arrow_drop_up</i></Link>
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(product.id)}}>arrow_drop_down</i></Link>
                                    </div>
                                    <button className="waves-effect waves-light btn amber darken-4 remove" onClick={()=>{this.handleRemove(product.id)}}>Remove</button>
                                </div>
                                
                            </li>
                     
                )
            })
        ):

         (
            <p>Nothing.</p>
         )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedProducts}
                    </ul>
                </div> 
                <Shipping />          
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedProducts,
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)