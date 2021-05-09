
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
import 'firebase/firestore';

class App extends React.Component {
  
  constructor(){
      super();
      this.state = {
          products: [],
          loading: true
      }
  }

  componentDidMount(){
    firebase
     .firestore()
     .collection('products')
     .get()
     .then((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map( (doc) => {
            console.log(doc.data());
        });

        const products = snapshot.docs.map( (doc) => {
          let data = doc.data();
          data['id'] = doc.id;
          return data;
        });

        this.setState({
           products:products,
           loading: false
        })
     })
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
       
      const {products, loading} = this.state;
      
      return (
        <div className="App">
          <Navbar count={ this.getCartCount() } />
          <Cart 
            products={products}
            handleIncreaseQuantity={this.handleIncreaseQuantity} 
            handleDecreaseQuantity={this.handleDecreaseQuantity}
            handleDeleteProduct={this.handleDeleteProduct} 
          />
          {loading && <h1>Loading Products...</h1>}
          <div style={{fontSize:"25px" , padding:"20px"}}>TOTAL PRICE : {this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
