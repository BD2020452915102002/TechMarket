import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function Nav(props) {
    const location = useLocation();
    return (
        <div>
            <List>
                {
                    [
                        { title: 'Thống kê', icon: <DashboardIcon />, path: '/managehome/dashboard' },
                        { title: 'Quản lý tài khoản', icon: <PersonIcon />, path: '/managehome/users' },
                        { title: 'Sản phẩm đăng bán', icon: <CategoryIcon />, path: '/managehome/products' },
                        { title: 'Trạng thái sản phẩm', icon: <FactCheckIcon />, path: '/managehome/managestatusproduct' },
                    ].map((e, i) => (
                        <ListItem
                            key={i}
                            disablePadding
                            className={`${location.pathname === e.path ? 'bg-[#F4F4F4]' : ''}`}
                        >
                            <ListItemButton component={Link} to={e.path}>
                                <ListItemIcon>
                                    {e.icon}
                                </ListItemIcon>
                                <ListItemText primary={e.title} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
}

export default Nav;
