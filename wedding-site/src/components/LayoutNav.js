import React, {Component} from 'react';
import { Menu, Layout, Statistic} from 'antd';
import moment from 'moment';
import { Routes, Route, Link } from 'react-router-dom';
// import MediaQuery from 'react-responsive'
import classes from './LayoutNav.module.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  FormOutlined,
  ShoppingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

// Components
import HomeContainer from '../containers/HomeContainer';

const { Sider, Header, Footer } = Layout;

const { Countdown } = Statistic;

class LayoutNav extends Component {
    state = {
        collapsed: false,
        deadline: moment("20221112", "YYYYMMDD").calendar(),
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    // mobile = () => {
    //     this.setState({
    //         collapsed: this.state.collapsed
    //     });
    // };

    onFinish = () => {
        console.log("Wedding Day!!");
    };

    render() {
        return (
			<>
				<Layout>
					<Sider className={classes.sider} trigger={null} collapsible collapsed={!this.state.collapsed}>
						<h1 className={classes.logo}>
                            K&A
                        </h1>
						<Menu className={classes.navItems} mode="inline" defaultSelectedKeys={['1']}>
							<Menu.Item key="1" icon={<HomeOutlined />}>
								<Link to="/">Home</Link>
							</Menu.Item>
							<Menu.Item key="2" icon={<FormOutlined />}>
								<Link to="/rsvp">RSVP</Link>
							</Menu.Item>
							<Menu.Item key="3" icon={<ShoppingOutlined />}>
								<Link to="/registry">Gift Registry</Link>
							</Menu.Item>
							<Menu.Item key="4" icon={<InfoCircleOutlined />}>
								<Link to="/details">Details</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Header className={classes.siteLayoutBackground}>
                            <Countdown className={classes.countdown} title="Days Untill Wedding" format="D : HH : mm : ss " value={this.state.deadline} onFinish={this.onFinish} />
							{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: classes.trigger,
							onClick: this.toggle,
							})}
						</Header>
						<Routes>
							<Route path="/" element={<HomeContainer />}/>
							<Route path="/rsvp" element={null}/>
							<Route path="/registry" element={null}/>
							<Route path="/projects" element={null}/>
							<Route path="/details" element={null}/>
						</Routes>
						<Footer style={{ textAlign: "center", background: "#FFDCDC", fontFamily: "Josefin Sans, sans-serif" }}>Kaylee & Austin's Wedding | A Mile High Coding Website</Footer>
					</Layout>
				</Layout>
		  	</>
        );
    }
}

export default LayoutNav;