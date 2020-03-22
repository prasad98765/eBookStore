import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import '../addToCart/addToCart.css'
import Customer from '../addToCart/customerDeatils'
import TopBar from "../topbar/navbar";
class CartIcon extends Component {
    constructor(props) {
        super(props)
        // this.count = 1
        this.state = {
            item:["a"],
            purchaseBookIndividualCount: [],
            totalPrice: 0,
            hideForm: false,
            callCustomer: null,
            price : null,
            CartBook : this.props.history.location.state
        }

        // this.state.item = this.props.history.location.state
        // this.state.item.map((item) => {
        //     { this.state.totalPrice = this.state.totalPrice + parseInt(item.price) }
        // })
    }
    

    onClick = () => {
        this.setState(this.state = { hideForm: !this.state.hideForm })
        console.log("done", this.state.hideForm)
    }

    decrement = (i, price) => {

        // if (this.state.purchaseBookIndividualCount[i] != undefined) {
        //     if (this.state.purchaseBookIndividualCount[i] > 1) {
        //         this.state.purchaseBookIndividualCount[i]--;
        //         this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
        //         this.state.totalPrice = this.state.totalPrice - parseInt(price);
        //         this.setState({ totalPrice: this.state.totalPrice })
        //     }
        // }
    }

    increment = (i, price) => {

        // if (this.state.purchaseBookIndividualCount[i] != undefined) {
        //     this.state.purchaseBookIndividualCount[i]++;
        //     this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
        //     this.state.totalPrice = this.state.totalPrice + parseInt(price);
        //     this.setState({ totalPrice: this.state.totalPrice })
        // }
    }


    remove = (i, price) => {
        this.state.totalPrice = this.state.totalPrice - (parseInt(price) * this.state.purchaseBookIndividualCount[i]);
        this.setState({ totalPrice: this.state.totalPrice })
        this.state.item.splice(i, 1);
        this.setState({ item: this.state.item })
    }

    componentWillMount() {
        var addToCart = []
        addToCart.push(this.props.history.location.state)
        this.setState({item : addToCart})
        console.log(addToCart);
        
    }

    render() {
        console.log("in add TO Cart State ,",this.state.item);
        
        console.log("in add TO Cart",this.props.history.location.state);
     var Books = this.state.item.map((item, i) => {
            this.state.purchaseBookIndividualCount.push(1)
            if (item != undefined) {
                console.log(item.Title);
                return (
                    <div>
                        <div className="cart-image1">
                            <img className="image" src={item.ImageURL}
                             style={{
                               height: "100px",
                               width: "10%",
                               marginTop: "2%",
                               marginLeft: "1%"
                             }}></img>
                            <div className="book-title">{item.Title}
                            <div className="book-author">{item.Author}</div>
                                <div className="book-price" > {item.Price}</div>
                                <div>
                                    <button className="minus-plus" onClick={() => { this.decrement() }}>-</button>
                                    <input className="text" value={this.state.purchaseBookIndividualCount} ></input>
                                    <button className="minus-plus" onClick={() => { this.increment() }}>+</button>
                                    <button className="remove" onClick={() => { this.remove() }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
      })
        return (
            <div>
                <TopBar></TopBar>
            
            <div>
                <div style={{borderStyle:"outset",marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
                    <div className="cart-title">My Cart({this.state.item.length})</div>
                    {Books}
                    <div className="total-price"><p id="totalprice">Total Price: {this.state.totalPrice}</p></div>
                    <button className="place-order" onClick={this.onClick} >PLACE ORDER </button>
                </div>
                <div>
                    {this.state.item.length >= 1 & this.state.hideForm ?
                        <Customer detail={this.state.item} formDetails={this.state.hideForm} />
                        :
                        <div> <Customer detail={this.state.item} formDetails={this.state.hideForm} />
                        </div>
                    }
                </div> 

            </div>
            </div>
        )
    }
}
export default CartIcon;