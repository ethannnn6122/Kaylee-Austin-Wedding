import React, {Component} from 'react';
import { Layout, Statistic} from 'antd';
import moment from 'moment';
import { Routes, Route } from 'react-router-dom';
import classes from './LayoutNav.module.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

//Components
import NavSider from './NavSider';
import FooterComp from './Footer';

// Containers
import HomeContainer from '../containers/HomeContainer';
import RsvpContainer from '../containers/RsvpContainer';
import GiftRegistry from '../containers/GiftRegistry';
import DetailsContainer from '../containers/DetailsContainer';

const { Header } = Layout;

const { Countdown } = Statistic;

class LayoutNav extends Component {
    state = {
        collapsed: false,
        deadline: moment("20221112", "YYYYMMDD").calendar(),
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
                            <Countdown className={classes.countdown} title="Days Untill Wedding" format="D : HH : mm : ss " value={this.state.deadline} onFinish={this.onFinish} />
							{React.createElement(!this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: classes.trigger,
							onClick: this.toggle,
							})}
						</Header>
						<Routes>
							<Route path="/" element={<HomeContainer />}/>
							<Route path="/rsvp" element={<RsvpContainer />}/>
							<Route path="/registry" element={<GiftRegistry />}/>
							<Route path="/details" element={<DetailsContainer />}/>
						</Routes>
						<FooterComp />
					</Layout>
				</Layout>
		  	</>
        );
    }
}

export default LayoutNav;