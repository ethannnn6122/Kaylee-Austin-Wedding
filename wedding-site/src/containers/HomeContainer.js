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
                headingClass: classes.heading,
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
                headingClass: classes.heading,
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
                headingClass: classes.heading,
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
                headingClass: classes.heading,
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
                            <h1 className={item.headingClass}>{item.heading}</h1>
                            <div>
                                <Link to={item.linkPath}>
                                    <Button className={item.btnClass} size={item.btnClass} type={item.btnType}>{item.btnText}</Button>
                                </Link>
                                <p className={item.subTextClass}>November 12th, 2022 at 4:00pm</p>
                                <p className={item.subTextClass} >Any questions, please contact us at <a href={"mailto:info@widickwedding.com"}>info@widickwedding.com</a></p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </>
        );
    }
}

export default HomeContainer;