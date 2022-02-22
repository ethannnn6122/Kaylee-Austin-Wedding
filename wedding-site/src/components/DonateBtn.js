import React, {useState} from 'react';
import {Button} from 'antd';

const DonateBtn = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };

    const openModal = () => {

    };

    window.addEventListener('scroll', toggleVisible);

    return(
        <Button></Button>
    );
}