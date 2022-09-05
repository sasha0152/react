import React from 'react';
import CustomLink from './CustomLink';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <headers>
              <CustomLink  to={'/'}>Главная</CustomLink>
              <CustomLink  to={'/Chat'}>Чаты</CustomLink>
              <CustomLink  to={'/Profile'}>Профиль</CustomLink>
              
            </headers>
            
            
        </>
    )
}

export default Layout;