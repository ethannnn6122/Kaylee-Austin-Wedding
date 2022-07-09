import React, { Component } from 'react';
import { Card, Col, Row, Tabs } from 'antd';
import classes from './DetailsContainer.module.css';
const { TabPane } = Tabs;

//Components

class DetailsContainer extends Component {
    render() {
        return (
            <div className={classes.cardWrapper}>
                <div className={classes.bannerImg}>Wedding Details</div>
                <Row gutter={16}>
                <Col span={8}>
                    <Card title="Location Info" bordered={false} className={classes.cards}>
                        <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.840046997477!2d-112.33342378506137!3d33.738952041622625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b5eabecc45d6d%3A0xd3ae4c2eb7908809!2sKiva%20Club%20Weddings!5e0!3m2!1sen!2sus!4v1653572373804!5m2!1sen!2sus" width="400" height="300" style={{ border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Meal Options" bordered={false} className={classes.cards}>
                        <Tabs tabPosition='left'>
                            <TabPane tab="Chicken Meal" key="1">
                                Content of Tab 1
                            </TabPane>
                            <TabPane tab="Steak Meal" key="2">
                                Content of Tab 2
                            </TabPane>
                            <TabPane tab="Vegetarian Meal" key="3">
                                Content of Tab 3
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="OTHER SHIT" bordered={false} className={classes.cards}>
                        Card content
                    </Card>
                </Col>
                </Row>
            </div>
        );
    }
}

export default DetailsContainer;