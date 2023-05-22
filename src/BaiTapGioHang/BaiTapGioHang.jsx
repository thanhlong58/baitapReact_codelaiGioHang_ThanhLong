import React, { Component } from 'react'
import Sneakers from './Sneakers'
import Cart from './Cart'
import dataGiay from '../Data/dataGiay.json'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'




export default class BaiTapGioHang extends Component {
    state  = {
        cart : []
        
    }

    addItem = (skChoosen) => {
        console.log(skChoosen); 
        let itemCart = {...skChoosen,quantity :1}    

        let cart = this.state.cart;
        let cartItem = cart.find(item=> item.id === itemCart.id) 
        if (cartItem) {
            cartItem.quantity += 1
        }else {
            cart.push(itemCart)
        }

        this.setState ({
            cart : cart
        })


    }

    deleteItem  = (idClick) => {
        console.log(idClick);
        let indexDel = this.state.cart.findIndex(item=>item.id === idClick) ;

        if (indexDel !== -1) {
            this.state.cart.splice(indexDel,1) ;

            this.setState({
                cart : this.state.cart
            })

        }

    }
    

    changeQuantity  = (idClick,num) => {
        const handleConfirmation = () => {
            Swal.fire({
              title: 'You are certain to delete this item?',
              
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
            }).then((result) => {
              if (result.isConfirmed) {
                
                this.deleteItem(idClick);
              } else {
                let item = this.state.cart.find(sp=> sp.id === idClick) ;
                item.quantity -= num;
               
              }
              this.setState({
                cart: this.state.cart,
              });
            });
          };
        console.log(idClick,num);
        let item = this.state.cart.find(sp=> sp.id === idClick) ;
        if(item) {
            item.quantity += num;
            if(item.quantity < 1) {
               handleConfirmation();
            }
        }


        this.setState ({
            cart : this.state.cart
        })
    }

    checkOut = (arrayProduct) => {
      
       
        arrayProduct = [...this.state.cart];
        arrayProduct = [];
        this.setState ({
            cart : arrayProduct
        })
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successful payment',
            showConfirmButton: false,
            timer: 1500
          })
    }

   


  render() {
    let totalAmount = this.state.cart.reduce((ttAmount,item,index)=>{
        return ttAmount += item.quantity;
    },0)
    return (
    
      <div className='container pt-5'>
       
        <div >
            <span  className='text-success'style={{cursor:'pointer',position: 'absolute',top:'0',right:'50px',fontSize:'30px',fontWeight:'bold'}} data-bs-toggle="modal" data-bs-target="#modelId" ><i className="fa fa-shopping-cart"></i>({totalAmount})</span>
        </div>
        <h3 className='pt-5 text-center'>Product list</h3>
        <div className='row'>
            {dataGiay.map((sneak)=>{
                return  <div className='col-3 mt-4 card-group' key={sneak.id}>
                <Sneakers deleteItem={this.deleteItem} addToCart ={this.addItem} sneak={sneak} />
              </div>
             
            })}
           

        </div>

        <Cart  Checkout= {this.checkOut} changeQuantity ={this.changeQuantity} deleteItem={this.deleteItem} cartItem ={this.state.cart} />
      </div>
    )
  }
}