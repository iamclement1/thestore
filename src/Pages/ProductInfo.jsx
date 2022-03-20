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
}, );

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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            { product && (
            <div>
              <p> {product.name} </p>
              <img src={product.imageURL} alt="" 
                className="productInfo-Image" />
              <hr />
              <p> {product.description} </p>
            <div className="d-flex justify-content-end my-3">
              <button>Add to Cart </button>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default ProductInfo