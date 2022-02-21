import React, {Component} from 'react';
import { Menu, Layout} from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import classes from './LayoutNav.module.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  BookOutlined,
  CodeOutlined,
  HistoryOutlined,
} from '@ant-design/icons';

// Components
import HomeContainer from '../containers/HomeContainer';

const { Sider, Header, Footer } = Layout;

class LayoutNav extends Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {
        return (
			<>
				<Layout>
					<Sider className={classes.sider} trigger={null} collapsible collapsed={this.state.collapsed}>
						<h1 className={classes.logo}>
                            K&A
                        </h1>
						<Menu className={classes.navItems} mode="inline" defaultSelectedKeys={['1']}>
							<Menu.Item key="1" icon={<HomeOutlined />}>
								<Link to="/">Home</Link>
							</Menu.Item>
							<Menu.Item key="2" icon={<BookOutlined />}>
								<Link to="/rsvp">RSVP</Link>
							</Menu.Item>
							<Menu.Item key="3" icon={<CodeOutlined />}>
								<Link to="/registry">Gift Registry</Link>
							</Menu.Item>
							<Menu.Item key="4" icon={<HistoryOutlined />}>
								<Link to="/details">Details</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Header className={classes.siteLayoutBackground}>
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
						<Footer style={{ textAlign: "center", background: "#FFDCDC" }}>Kaylee & Austin's Wedding | Created by Ethan Gruenemeier</Footer>
					</Layout>
				</Layout>
		  	</>
        );
    }
}

export default LayoutNav;