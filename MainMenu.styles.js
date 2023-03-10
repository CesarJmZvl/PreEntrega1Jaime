import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
`;

export const Menu = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const MenuItem = styled.li`
    margin-right: 1rem;
`;

export const Cart = styled.div`
    display: flex;
    align-items: center;
`;

export const CartCount = styled.span`
    font-size: 1.2rem;
    margin-right: 0.5rem;
`;

export const MenuLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    &:hover {
        color: #007bff;
    }
`;