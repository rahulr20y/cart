import React from 'react';

const CartItem = (props) => {

    const {title , qty , price} = props.product;
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
                        onClick={() => props.handleIncreaseQuantity(props.product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/929/929430.svg" 
                        onClick={() => props.handleDecreaseQuantity(props.product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/3089/3089818.svg" 
                        onClick={() => props.handleDeleteProduct(props.product.id)}
                    />
                </div>
            </div>
        </div>
    );
    
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