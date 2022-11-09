import React, {Component} from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import classes from './LayoutNav.module.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

//Components
import NavSider from './NavSider';
import ClockCount from "./ClockCount";

// Containers
import HomeContainer from '../containers/HomeContainer';
import GiftRegistry from '../containers/GiftRegistry';
import DetailsContainer from '../containers/DetailsContainer';

const { Header } = Layout;

// const { Countdown } = Statistic;

class LayoutNav extends Component {
    state = {
        collapsed: false,
        deadline: "November, 12, 2022"
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onFinish = () => {
        console.log("Wedding Day!!");
    };

    render() {
        return (
			<>
				<Layout>
                    <NavSider isCollapsed={this.state.collapsed}/>
					<Layout style={{ position: "relative", minHeight: "100vh" }}>
						<Header className={classes.siteLayoutBackground}>
                            
							{React.createElement(!this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: classes.trigger,
							onClick: this.toggle,
							})}
                            <ClockCount deadline={this.state.deadline} />
						</Header>
						<Routes>
							<Route path="/" element={<HomeContainer />}/>
							<Route disabled path="/rsvp" element={<HomeContainer />}/>
							<Route path="/registry" element={<GiftRegistry />}/>
							<Route path="/details" element={<DetailsContainer />}/>
						</Routes>
					</Layout>
				</Layout>
		  	</>
        );
    }
}

export default LayoutNav;