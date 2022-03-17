import React from 'react';
import Homepage from './Pages/Homepage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ProductInfo from './Pages/ProductInfo';
import CartPage from './Pages/CartPage';
import './stylesheets/layout.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Homepage/>} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={ <LoginPage /> } />
                <Route path='/product-info' element={ <ProductInfo /> } />
                <Route path='/cart' element={ <CartPage /> } />
            </Routes>
            </BrowserRouter>
        </div>
    
    )
};

export default App;
