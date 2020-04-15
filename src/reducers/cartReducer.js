import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,DATA_FETHC } from '../actions/actionTypes'


let cartReducer = (state,action) =>{
    // initialize state
    if(state === undefined){
        state ={
            addedProducts:[],
            total:0,
            products:[]
        }
    }

// INSIDE HOME COMPONENT
if (action.type === DATA_FETHC) {
    let productsPrice = action.data.map(item =>{

        return {...item,
            price: 9.99
        
        }
    })
    state.products = productsPrice

    
}
if(action.type === ADD_TO_CART){

    let addedProduct = state.products.find(product => {
        // console.log("===WHAT IS THIS PRODUCT?===")
        // console.log(product)
        // console.log(action.id)
        return product.id === action.id
       
    })

    // console.log("====LOOKING FOR STATE====")
    // console.log(state)
    // console.log("=========LOOKING FOR ADDED PRODUCT=========")
    // console.log(addedProduct)

    //check if the action id exists in the addedProducts
    let existed_product = state.addedProducts.find(product=> action.id === product.id)
    if(existed_product){
        addedProduct.quantity += 1
        return{
            ...state,
            total: state.total + addedProduct.price
        }
    }
    else{
        addedProduct.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedProduct.price

        return{
            ...state,
            addedProducts:[
                ...state.addedProducts, addedProduct
            ],
            total : newTotal
        }
    }

}
if(action.type === REMOVE_ITEM){
    let productToRemove = state.addedProducts.find(product=> action.id === product.id)
    let new_items = state.addedProducts.filter(product => action.id !== product.id)

    // calculating the total

    let newTotal = state.total - (productToRemove.price * productToRemove.quantity)
    console.log(productToRemove)
    return{
        ...state,
        addedProducts: new_items,
        total: newTotal
    }
}

// INSIDE CART COMPONENT

  
  if(action.type=== ADD_QUANTITY){
    let addedProduct = state.products.find(product=> product.id === action.id)
      addedProduct.quantity += 1 
      let newTotal = state.total + addedProduct.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUB_QUANTITY){  
    let addedProduct = state.products.find(product=> product.id === action.id) 
    //if the qt == 0 then it should be removed
    if(addedProduct.quantity === 1){
        let new_products = state.addedProducts.filter(product=>product.id !== action.id)
        let newTotal = state.total - addedProduct.price
        return{
            ...state,
            addedProducts: new_products,
            total: newTotal
        }
    }
    else {
        addedProduct.quantity -= 1
        let newTotal = state.total - addedProduct.price
        return{
            ...state,
            total: newTotal
        }
    }
    
}

if(action.type=== ADD_SHIPPING){
      return{
          ...state,
          total: state.total + 3.99
      }
}

if(action.type=== 'SUB_SHIPPING'){
    return{
        ...state,
        total: state.total - 3.99
    }
}

else{
return state
}

}



















export default cartReducer