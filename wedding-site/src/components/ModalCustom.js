import React from 'react';
import { Modal } from 'antd';

const ModalCustom = () => {
	// const [visible, setVisible] = React.useState(false);
    // const [confirmLoading, setConfirmLoading] = React.useState(false);
    // const [modalText, setModalText] = React.useState();
    // const showModal = () => {
    // 	setVisible(true);
	// 	console.log("modal open");
    // };

    // const handleOk = () => {
	// 	setModalText('Thank you!');
	// 	setConfirmLoading(true);
	// 	setTimeout(() => {
	// 		setVisible(false);
	// 		setConfirmLoading(false);
	// 	}, 2000);
    // };

    // const handleCancel = () => {
	// 	console.log('Clicked cancel button');
	// 	setVisible(false);
    // };

	const onClick = () => {
		let countDown = 5;
		const modal = Modal.success({
			title: 'RSVP Recieved',
			content: 'Thank You!'
		});
		const timer = setInterval(() => {
			countDown -= 1;
		}, 1000);
		setTimeout(() => {
			clearInterval(timer);
			modal.destroy();
		}, countDown * 1000);
	}

    return (
		<>
			
		</>
	);
};

export default ModalCustom;