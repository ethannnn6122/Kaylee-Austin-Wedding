import React, {Component} from 'react';
import {Card, Button} from 'antd';
import classes from './RsvpContainer.module.css';
import { Link } from 'react-router-dom';

//Components
import Form from '../components/Form';

class RsvpContainer extends Component {
    render() {
        return(
            <>
                <Card bordered={false}>
                    <div className={classes.titleWrapper}>
                        <h5>RSVP</h5>
                        <p className={classes.subText}>Check out the details page to see the menu options.</p>
                        <Link to={"/details"}>
                            <Button className={classes.btnClass} type="ghost">Details</Button>
                        </Link>
                    </div>
                    <Form /> 
                </Card> 
            </>
        )
    }
}

export default RsvpContainer;