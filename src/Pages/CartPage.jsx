import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import Layout from '../Components/Layout'

function CartPage() {

  const { cartItems } = useSelector ( state => state.cartReducer);

  const [ totalAmount, setTotalAmount ] = useState(0)

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price
    })
    setTotalAmount(temp)
  }, [cartItems])

  // local storage is updated once the action delete or add is done  in the cart page
  useEffect( () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  const dispatch = useDispatch ();
  const deleteFromCart = (product) =>{
    dispatch({ type: 'DELETE_FROM_CART', payload: product });
  }

  return (
    <Layout>
      <table className='table mt-3'>
        <thead>
          <tr>
            <th>
              Image
            </th>
            <th>
              Name
            </th>
            <th>
              Price
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map( item => {
            return <tr>
              <td>
                <img src={item.imageURL} alt="" height="80" width="80" />
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.price}
              </td>
              <td>
                <FaTrash onClick={ () => deleteFromCart(item)} />
              </td>
            </tr>
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <h1 className="total-amount">
          Total Amount = $ {totalAmount} 
        </h1>
      </div>
    </Layout>
  )
}

export default CartPage