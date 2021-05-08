import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price : 9999,
                    title : 'Phone',
                    qty : 1,
                    img : "",
                    id : 1
                },
                {
                    price : 999,
                    title : 'Watch',
                    qty : 2,
                    img : "",
                    id: 2
                },
                {
                    price : 50000,
                    title : 'Laptop',
                    qty : 1,
                    img : "",
                    id : 3
                }
            ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
        //this.testing();
    }
    render(){
        // const arr = [1, 2, 3, 4, 5];
        const { products } = this.state;
        return (
            <div className="cart">
                {/* {arr.map((item)=>{
                    return item+5;
                })} */}

                {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}

                { products.map( (product) => {
                    return (
                        <CartItem
                           product={product}
                           key={product.id} 
                        />
                    );

                } ) }
            </div>
        )
    }
}

export default Cart;