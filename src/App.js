
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


  render() {
       
      const {products} = this.state;
      
      return (
        <div className="App">
          <Navbar />
          <Cart 
            products={products}
            handleIncreaseQuantity={this.handleIncreaseQuantity} 
            handleDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct} 
          />
        </div>
      );
  }
}

export default App;
