import React, { Component } from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

import classes from './HomeContainer.module.css';

class HomeContainer extends Component {
    render() {
        return(
            <>
                <Carousel autoplay effect='fade'>
                    <div className={classes.slideOne}>
                        <h1>Kaylee & Austin</h1>
                        <Link to="/rsvp">
                            <Button className={classes.btn} size='large' type='ghost'>RSVP Now</Button>
                        </Link>
                    </div>
                    <div className={classes.slideTwo}>
                        <h1>Kaylee & Austin</h1>
                        <Link to="/rsvp">
                            <Button className={classes.btn} size='large' type='ghost'>RSVP Now</Button>
                        </Link>
                    </div>
                    <div className={classes.slideThree}>
                        <h1>Kaylee & Austin</h1>
                        <Link to="/rsvp">
                            <Button className={classes.btn} size='large' type='ghost'>RSVP Now</Button>
                        </Link>
                    </div>
                    <div className={classes.slideFour}>
                        <h1>Kaylee & Austin</h1>
                        <Link to="/rsvp">
                            <Button className={classes.btn} size='large' type='ghost'>RSVP Now</Button>
                        </Link>
                    </div>
                </Carousel>
            </>
        );
    }
}

export default HomeContainer;