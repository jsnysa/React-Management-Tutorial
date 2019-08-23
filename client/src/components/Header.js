import React from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">홈</NavLink>
            <NavLink to="/about/velopert" className="item">소개</NavLink>
            <NavLink to="/posts" className="item">포스트</NavLink>
            <NavLink to="/me" className="item">mypage</NavLink>
            <NavLink to="/login" className="item">login</NavLink>
            <NavLink to="/search" className="item">검색</NavLink>
            <NavLink to="/cust" className="item">고객</NavLink>
        </div>
    );
};

export default Header;