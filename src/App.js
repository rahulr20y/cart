
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

      this.db = firebase.firestore()
  }

  componentDidMount(){

   this.db
     .collection('products')
    //  .where('price','==',999)
    //  .where('title','==','Bag')
     .orderBy('price','desc')
     .onSnapshot((snapshot) => {
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

      // products[index].qty = product.qty + 1;

      // this.setState({
      //     products : products
      // });

      let docRef = this.db.collection('products').doc(product.id);
      console.log(docRef);

      docRef.update({
        qty : product.qty + 1
      }).then( () => {
        console.log("Updated Successfully")
      }).catch( (error) => {
        console.log("Error" , error);
      })
  }
  handleDecreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      // if(products[index].qty > 0){
      //     products[index].qty = product.qty - 1;
      // }

      // this.setState({
      //     products : products
      // });

      if(product.qty == 0){
        return;
      }
  
      let docRef = this.db.collection('products').doc(product.id);
      console.log(docRef);
  
      docRef.update({
        qty : product.qty - 1
      }).then( () => {
        console.log("Updated Successfully")
      }).catch( (error) => {
        console.log("Error" , error);
      })
  }
  handleDeleteProduct = (id) => {
      let {products} = this.state;
      // let items = products.filter((item) => {
      //     return item.id !== id
      // });

      // this.setState({
      //     products : items
      // });

      let docRef = this.db.collection('products').doc(id);
      console.log(docRef);

      docRef.delete().then( () => {
        console.log("Deleted Successfully")
      }).catch( (error) => {
        console.log("Error" , error);
      })
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

  addProduct = () => {

    this.db
    .collection('products')
    .add({
      img : 'http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg',
      price : 50000,
      title : 'Laptop',
      qty : 10
    })
    .then( (docRef) => {
      console.log(docRef);
    })
    .catch( (error) => {
      console.log('Error' , error);
    })
  }


  render() {
       
      const {products, loading} = this.state;
      
      return (
        <div className="App">
          <Navbar count={ this.getCartCount() } />
          <button onClick={this.addProduct} style={{padding:10, margin:10}}>Add Product</button>
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
