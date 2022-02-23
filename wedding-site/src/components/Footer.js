import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComp = () => {
    return(
        <Footer style={{
            textAlign: "center", 
            background: "#FFDCDC", 
            fontFamily: "Josefin Sans, sans-serif",
        }}>
            Kaylee & Austin's Wedding | A Mile High Coding Website
        </Footer>
        
    )
}

export default FooterComp;