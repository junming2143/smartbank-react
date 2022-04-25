import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './modules/Homepage';
import LoginPage from './modules/login/LoginPage';
import CartPage from './modules/cart/CartPage';
import RewardCataloguePage from './modules/rewards/RewardCataloguePage';
import ConfirmOrder from './modules/order-confirm/ConfirmOrderPage';


const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/rewards" element={<RewardCataloguePage />} />
                <Route path="/order-confirm" element={<ConfirmOrder />} />
            </Routes>
        </div>
    );
}

export default AppRoute;