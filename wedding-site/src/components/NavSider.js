import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import classes from './NavSider.module.css';
import { useLocation } from 'react-router-dom';

import {
    HomeOutlined,
    FormOutlined,
    ShoppingOutlined,
    InfoCircleOutlined,
  } from '@ant-design/icons';

const { Sider } =  Layout;

let menuItems = [
    {
        name: "Home",
        route: "/",
        key: "0",
        icon: <HomeOutlined />,
    },
    {
        name: "RSVP",
        route: "/rsvp",
        key: "1",
        icon: <FormOutlined />,
    },
    {
        name: "Gift Registry",
        route: "/registry",
        key: "2",
        icon: <ShoppingOutlined />,
    },
    {
        name: "Details",
        route: "/details",
        key: "3",
        icon: <InfoCircleOutlined />,
    },
];

const NavSider = (props) => {
    return(
        <Sider className={classes.sider} trigger={null} collapsible collapsed={!props.isCollapsed}>
		<h1 className={classes.logo}>
            K&A
        </h1>
        <Menu className={classes.navItems} mode="inline"
              defaultSelectedKeys={[useLocation().pathname]}
              selectedKeys={[useLocation().pathname]}>
            {menuItems.map((item) => (
                <Menu.Item key={item.route} icon={item.icon}>
                    <Link to={item.route}>{item.name}</Link>
                </Menu.Item>
            ))}
        </Menu>
	</Sider>
    )
}

export default NavSider;

