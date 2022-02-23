import React, {useState} from 'react';
import {Button} from 'antd';

import classes from './DonateBtn.module.css';
import { HeartFilled } from '@ant-design/icons';

//components
import DonateModal from './DonateModal';

const DonateBtn = (props) => {

    const [visible, setVisible] = useState(false);

    // const Click = () => {
    //     console.log("Clicked");
    // }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50){
            setVisible(true)
            return true;
        } 
        else if (scrolled <= 50){
            setVisible(false)
            return false;
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return(
            <>
                <Button className={classes.donateBtn} shape='circle' 
                    style={{ display: visible ? 'inline' : 'none' }}> 
                    <HeartFilled style={{ color: "#000054 "}} />
                </Button>
                <DonateModal onClick={props.onClick} />
            </>
    );
}

export default DonateBtn;