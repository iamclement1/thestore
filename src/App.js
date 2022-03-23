import React from 'react';
import Homepage from './Pages/Homepage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ProductInfo from './Pages/ProductInfo';
import CartPage from './Pages/CartPage';
import './stylesheets/layout.css'
import './stylesheets/product.css'
import './stylesheets/authentication.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className='App'>
            <ToastContainer />
            <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Homepage/>} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={ <LoginPage /> } />
                <Route path='/product-info/:productid' element={ <ProductInfo /> } />
                <Route path='/cart' element={ <CartPage /> } />
            </Routes>
            </BrowserRouter>
        </div>
    
    )
};

export default App;
