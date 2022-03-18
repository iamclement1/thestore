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
                        <div className="m-2 p-1">
                            <h3> {product.name} </h3>
                            <img src={product.imageURL} alt="" 
                            className='product-img'/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </Layout>
    
    )
}

export default Homepage