import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import React from 'react';

function Nav(props) {
    return (
        <div>
            <List>
                {
                    [
                        { title: 'Thống kê', icon: <DashboardIcon />, path: '/managehome/dashboard' },
                        { title: 'Quản lý tài khoản', icon: <PersonIcon />, path: '/managehome/users' },
                        { title: 'Sản phẩm đăng bán', icon: <CategoryIcon />, path: '/managehome/products' },
                        { title: 'Trạng thái sản phẩm', icon: <CategoryIcon />, path: '/managehome/products' },
                    ].map((e, i) => (
                        <Link to={e.path} key={i}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {e.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={e.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
            </List>
        </div>
    );
}

export default Nav;