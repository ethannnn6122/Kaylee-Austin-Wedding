import React from 'react';
import { Modal } from 'antd';

const DonateModal = () => {
	const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Donate Stuff');

    const showModal = () => {
    	setVisible(true);
		console.log("modal open");
    };

    const handleOk = () => {
		setModalText('Thank you for donating!');
		setConfirmLoading(true);
		setTimeout(() => {
			setVisible(false);
			setConfirmLoading(false);
		}, 2000);
    };

    const handleCancel = () => {
		console.log('Clicked cancel button');
		setVisible(false);
    };

    return (
		<>
			<div onClick={showModal} 
				style={{width: "2rem",
				position: "fixed",
				right: "0",
				bottom: "0",
				height: "2rem",
				zIndex: "1",
				cursor: "pointer",
				margin: "0 1rem 1rem 0"
				}}></div>
			<Modal
				title="Donate to Kaylee & Austin's Wedding"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			>
				<p>{modalText}</p>
			</Modal>
		</>
	);
};

export default DonateModal;