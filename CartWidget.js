import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cart, CartCount, MenuLink } from './MainMenu.styles';

const Cart = () => {
    return (
        <Cart>
        <CartCount>0</CartCount>
        <MenuLink to="/cart">Cart</MenuLink>
        </Cart>
    );
};

export default Cart;