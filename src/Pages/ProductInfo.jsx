import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { getDoc, doc  } from 'firebase/firestore';
import fireDB from '../FirebaseConfig';
import { useParams } from 'react-router-dom';

function ProductInfo() {

  const [ product, setProduct ] = useState();
  const params  = useParams()

  useEffect( () => {
    getData()
}, )

  async function getData() {
    try {
        const productTemp = await getDoc(
        doc (fireDB, 'products', params.productid )
          );      
        setProduct(productTemp.data())
    } catch(error) {
        console.log(error)
    }
}

  return (
    <Layout>
      <h1>Product Info</h1>
      { product && (
        <h1> {product.name} </h1>
      )}
    </Layout>
  )
}

export default ProductInfo