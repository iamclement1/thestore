import React from 'react';
import Homepage from './Pages/Homepage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ProductInfo from './Pages/ProductInfo';
import CartPage from './Pages/CartPage';
import './stylesheets/layout.css'
import './stylesheets/product.css'
import './stylesheets/authentication.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className='App'>
            <ToastContainer />
            <BrowserRouter>
            <Routes>
                <Route path='/' exact element={
                    <ProtectedRoutes>
                        <Homepage/>
                    </ProtectedRoutes>
                } />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={ <LoginPage /> } />
                <Route path='/product-info/:productid' element={ 
                    <ProtectedRoutes>
                        <ProductInfo />
                    </ProtectedRoutes>
                } />
                <Route path='/cart' element={ 
                    <ProtectedRoutes>
                        <CartPage />
                    </ProtectedRoutes>
                } />
            </Routes>
            </BrowserRouter>
        </div>
    
    )
};

export default App;

export const ProtectedRoutes = ({children}) => {
    if(localStorage.getItem('currentUser')){
        return children
    } else{
        return <Navigate to='/login' />
    }
}
