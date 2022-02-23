import React, {Component} from 'react';
import {Card} from 'antd';
// import classes from './RsvpContainer.module.css';

//Components
import Form from '../components/Form';

class RsvpContainer extends Component {
    render() {
        return(
            <>
                <Card title="RSVP" bordered={false}>
                    <Form/>
                </Card> 
            </>
        )
    }
}

export default RsvpContainer;