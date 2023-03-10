import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './CartWidget';
import { Nav, Menu, MenuItem, MenuLink } from './MainMenu.styles';

const MainMenu = () => {
    return (
        <Nav>
        <Menu>
            <MenuItem>
            <MenuLink to="/category1">Category 1</MenuLink>
            </MenuItem>
            <MenuItem>
            <MenuLink to="/category2">Category 2</MenuLink>
            </MenuItem>
            <MenuItem>
            <MenuLink to="/category3">Category 3</MenuLink>
            </MenuItem>
        </Menu>
        <Cart />
        </Nav>
    );
};

export default MainMenu;