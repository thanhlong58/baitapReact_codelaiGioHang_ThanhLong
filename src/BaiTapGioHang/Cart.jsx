import React, { Component } from 'react'

export default class Cart extends Component {
    
    render() {
        const {cartItem,deleteItem,changeQuantity,Checkout} = this.props;
        return (
            <div>

                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Your Cart</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                        <th>Id</th>
                                        <th>Img</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                        
                                        </tr>
                                       
                                    </thead>
                                    <tbody>
                                    {cartItem.map((item)=>{
                                                return  <tr key={item.id}>
                                           
                                                <td>{item.id}</td>
                                                <td><img src={item.image} width={50} alt="..." /></td>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td>
                                                    <button className='mx-1' onClick={()=>{
                                                        changeQuantity(item.id,-1)
  
                                                    }} >-</button>
                                                    {item.quantity}
                                                    <button className='mx-1' onClick={()=>{
                                                        changeQuantity(item.id,1)
                                                    }}>+</button>
    
                                                </td>
                                                <td>${item.price * item.quantity}</td>
                                                <td>
                                                <button  className='btn  btn-danger' onClick={()=>{
                                                    deleteItem(item.id);    
     
                                                }}>
                                                    <i className='fa fa-trash'></i>
                                                </button>
                                                </td>
       
    
                                            </tr>
                                            
                                            })}
                                           
                                    </tbody>
                                    <tfoot>
                                                <tr>
                                                    <td colSpan="5"></td>
                                                    <td className='text-success fs-4'>Total Bill</td>
                                                    <td className='fs-5 text-bold' >$
                                                        {cartItem.reduce((total,item,index)=>{
                                                            return total += (item.price * item.quantity)

                                                        },0)
                                                        }
                                                    </td>
                                                </tr>
                                            </tfoot>
                                      
                                  

                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={()=>{
                                    Checkout(cartItem);

                                }} data-bs-dismiss="modal"  type="button" className="btn btn-primary">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}