import React, { Component } from 'react';
import {Card} from 'antd';
import classes from './GiftRegistry.module.css'

class GiftRegistry extends Component {
    render() {
        return (
            <Card title="Gift Registries">
                <a href="https://www.amazon.com/wedding/share/widick-wedding" target="_blank" rel="noreferrer">
                    <div className={classes.amznRegistry}></div>
                </a>
                <a href="https://www.target.com/gift-registry/gift/widick-wedding-1" target="_blank" rel="noreferrer">
                    <div className={classes.targtRegistry}></div>
                </a>
            </Card>
        );
    }
}

export default GiftRegistry;