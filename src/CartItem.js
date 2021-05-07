import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 2,
            img : ""
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        //this.testing();
    }

    // testing(){
    //     const promise = new Promise((resolve, rejecct) => {
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(() => {
    //         //set state act like a synchronous call in this
    //         this.setState({qty: this.state.qty+10});
    //         this.setState({qty: this.state.qty+10});
    //         this.setState({qty: this.state.qty+10});

    //         console.log('state',this.state);
    //     });
    // }

    increaseQuantity = () => {
        //this.state.qty+=1;
        //console.log('this' , this);

        // set state form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //set state form 2  - if prev-state required use this
        this.setState( (prevState) => {
            return {
                qty : prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        //console.log('this' , this);
        const {qty} = this.state;
        if(qty == 0){
            return;
        }
        this.setState( (prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });
    }

    render(){
        const {title , qty , price} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs. {price}</div>
                    <div style={{color : '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*todo*/}
                        <img 
                          alt="increase" 
                          className="action-icons" 
                          src="https://image.flaticon.com/icons/svg/1828/1828817.svg"
                          onClick={this.increaseQuantity} 
                        />
                        <img 
                          alt="decrease" 
                          className="action-icons" 
                          src="https://image.flaticon.com/icons/svg/929/929430.svg" 
                          onClick={this.decreaseQuantity}
                        />
                        <img 
                          alt="delete" 
                          className="action-icons" 
                          src="https://image.flaticon.com/icons/svg/3089/3089818.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;