import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { collection, getDocs } from "firebase/firestore"; 
import fireDB from '../FirebaseConfig'



function Homepage() {

    const  [products, setProducts] = useState([]);

    useEffect( () => {
        getData()
    }, [])

    async function getData() {
        try {
            const user = await getDocs(collection (fireDB, 'products'));
            const productsArray = []
            user.forEach((doc) => {
                const obj = {
                    id: doc.id, 
                    ...doc.data()
                }
                productsArray.push(obj);
            });
            setProducts(productsArray)
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <Layout>
        <div className="container">
            <div className="row">
                {products.map((product) => {
                    return <div className="col-md-4">
                        <div className="m-2 p-1 product">
                            <div className="product-content">
                                <p> {product.name} </p>
                                    <div className='text-center'>
                                        <img src={product.imageURL} alt="" 
                                        className='product-img'/>
                                    </div>
                            </div>

                            <div className="product-actions">
                                <h2> ${product.price}  </h2>
                                <div className="d-flex">
                                    <button>Add to Cart</button>
                                    <button>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </Layout>
    
    )
}

export default Homepage