import React, { Component} from 'react'
import { connect } from 'react-redux'
import { addToCart ,dataFetch} from '../actions/cartActions'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state ={
           products:[],
           searchResults:''
        }
        
    }


    componentDidMount = (params) => {
        let api = "https://api.scalablepress.com/v2/categories/sweatshirts"
        fetch(api)
        .then(res =>{
            return res.json()
        })
        .then(data=>{
            this.props.dataFetch(data.products)
            this.setState({
                products:data.products,

            })
        })
        
    }
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    render() {
        let productList = this.state.products.map((product,index)=>{
            // console.log(product)
            return(
                <React.Fragment>
                    { product.image ?  
                    <div className = 'card' key={index} >
                        <div className="card-image">
                            <img src={product.image.url} alt={product.imgage}height="300px" />
                            {/* <span className="card-title">{product.image ? <p>{product.image.label}</p> : null}</span> */}
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(product.id)}}><i className="material-icons amber darken-4">add</i></span>
                        </div>
                        <div className="card-content">
                                    <p>{product.name}</p>
                                    <p><b>Price: $9.99</b></p>
                                    {/* <p><b>{product.style}</b></p> */}
                        </div>
                    </div>
                    : null }
                </React.Fragment>
                
            )
        })
        return (
            <div className="container">
                <h3 className="center"> Products</h3>
                <div className="box">
                    {productList}
                </div>
            </div> 
        )
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)
