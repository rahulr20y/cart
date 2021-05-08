
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  
  constructor(){
      super();
      this.state = {
          products: [
              {
                  price : 9999,
                  title : 'Phone',
                  qty : 1,
                  img : "https://images.pexels.com/photos/265658/pexels-photo-265658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  id : 1
              },
              {
                  price : 999,
                  title : 'Watch',
                  qty : 2,
                  img : "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  id: 2
              },
              {
                  price : 50000,
                  title : 'Laptop',
                  qty : 1,
                  img : "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  id : 3
              }
          ]
      }
      //this.increaseQuantity = this.increaseQuantity.bind(this);
      //this.testing();
  }


  handleIncreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      products[index].qty = product.qty + 1;

      this.setState({
          products : products
      });
  }
  handleDecreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      if(products[index].qty > 0){
          products[index].qty = product.qty - 1;
      }

      this.setState({
          products : products
      });
  }
  handleDeleteProduct = (id) => {
      let {products} = this.state;
      let items = products.filter((item) => {
          return item.id !== id
      });

      this.setState({
          products : items
      });
  }

  getCartCount = () => {
    let {products} = this.state;
    let count = 0;

    products.forEach( (item) => {
      count = count + item.qty;
    })

    return count;
  }
  getCartTotal = () => {
    let {products} = this.state;
    let total = 0;

    products.forEach( (item) => {
      total = total + (item.qty * item.price);
    })

    return total;
  }


  render() {
       
      const {products} = this.state;
      
      return (
        <div className="App">
          <Navbar count={ this.getCartCount() } />
          <Cart 
            products={products}
            handleIncreaseQuantity={this.handleIncreaseQuantity} 
            handleDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct} 
          />
           <div style={{fontSize:"25px" , padding:"20px"}}>TOTAL PRICE : {this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
