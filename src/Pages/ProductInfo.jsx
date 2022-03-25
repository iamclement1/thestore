import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { getDoc, doc  } from 'firebase/firestore';
import fireDB from '../FirebaseConfig';
import { useParams } from 'react-router-dom';

function ProductInfo() {

  const [ loading, setLoading ] = useState(false);
  const [ product, setProduct ] = useState();
  const params  = useParams()
  

  useEffect( () => {
    getData()
}, );

  async function getData() {
    setLoading(true);
    try {
        const productTemp = await getDoc(
        doc (fireDB, 'products', params.productid )
          );      
        setProduct(productTemp.data());
        setLoading(false)
    } catch(error) {
        console.log(error);
        setLoading(false);
    }
}

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            { product && (
            <div>
              
              <img src={product.imageURL} alt="" 
                className="productInfo-Image" />
              <hr />
              <p> {product.name} </p>
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