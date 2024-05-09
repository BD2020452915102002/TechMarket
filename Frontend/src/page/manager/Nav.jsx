import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import React from 'react';

function Nav(props) {
    return (
        <div>
            <List>
                {
                    [
                        { title: 'Thống kê', icon: <NewspaperIcon />, path: '/student/news' },
                        { title: 'Người dùng', icon: <EqualizerIcon />, path: '/student/statistic' },
                        { title: 'Sản phẩm', icon: <AppRegistrationIcon />, path: '/student/news' },
                        // { title: '', icon: <CalendarMonthIcon />, path: '/student/statistic' },
                        // { title: 'Kết nối phòng đào tạo', icon: <SchoolIcon />, path: '/student/news' },
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