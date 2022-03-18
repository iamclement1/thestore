import React from 'react'
import Layout from '../Components/Layout'
import { collection, addDoc, getDoc } from "firebase/firestore"; 
import fireDB from '../FirebaseConfig'
import { theshopProduct } from '../theshopProduct';


function Homepage() {

    async function addData() {
        try{
            await addDoc(collection(fireDB, "users"), {
                name: 'Jimoh Pelumi',
                age: 20,
            })
        } catch(error) {
            console.log(error)
        }

    
    }

    async function getData() {
        try{
            const user = await getDoc(collection (fireDB, 'users'), {
                name: 'Jimoh Pelumi',
                age: 20
            })
            const userArray = []

            user.forEach((doc) => {
                const obj = {
                    id: doc.id, 
                    ...doc.data()
                }
                userArray.push(obj)
            });

            console.log(userArray)
        } catch(error) {
            console.log(error)
        }
    }

    function addProductData () {
        theshopProduct.map(async (product) => {
            try {
                await addDoc(collection(fireDB, 'product'), product);
            } catch (error) {
                console.log(error);
            }
        })
    }
    
    return (
    <Layout>
        <h1>Home Page</h1>
        <button onClick={addData}>Add Data to firebase</button>
        <button onClick={getData}>Retrive data from firebase</button>
    </Layout>
    
    )
}

export default Homepage