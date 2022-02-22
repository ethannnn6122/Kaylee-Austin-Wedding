import React, { Component } from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

import classes from './HomeContainer.module.css';

class HomeContainer extends Component {
    state = {
        slides: [
            {
                slideClass: classes.slideOne,
                subTextClass: classes.subTitle,
                heading: "Kaylee & Austin",
                linkPath: "/rsvp",
                btnClass: classes.btn,
                btnSize: 'large',
                btnType: 'ghost',
                btnText: 'RSVP Now'
            },
            {
                slideClass: classes.slideTwo,
                subTextClass: classes.subTitle,
                heading: "Kaylee & Austin",
                linkPath: "/rsvp",
                btnClass: classes.btn,
                btnSize: 'large',
                btnType: 'ghost',
                btnText: 'RSVP Now'
            },
            {
                slideClass: classes.slideThree,
                subTextClass: classes.subTitle,
                heading: "Kaylee & Austin",
                linkPath: "/rsvp",
                btnClass: classes.btn,
                btnSize: 'large',
                btnType: 'ghost',
                btnText: 'RSVP Now'
            },
            {
                slideClass: classes.slideFour,
                subTextClass: classes.subTitle,
                heading: "Kaylee & Austin",
                linkPath: "/rsvp",
                btnClass: classes.btn,
                btnSize: 'large',
                btnType: 'ghost',
                btnText: 'RSVP Now'
            },

        ]
    }
    render() {
        return(
            <>
                <Carousel autoplay effect='fade'>
                    {this.state.slides.map((item) => (
                        <div key={item.slideClass} className={item.slideClass}>
                        <h1>{item.heading}</h1>
                        <p className={item.subTextClass}>On Saturday, November 12th 2022, join us in a celebration</p>
                        <Link to={item.linkPath}>
                            <Button className={item.btnClass} size={item.btnClass} type={item.btnType}>{item.btnText}</Button>
                        </Link>
                    </div>
                    ))}
                </Carousel>
            </>
        );
    }
}

export default HomeContainer;