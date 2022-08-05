import { Modal, Button } from 'antd';
import React from 'react';

const ModalCustom = (props) => {

    return (
		<>
			<Modal
				onClick={props.toggle}
				title="RSVP Confirmation"
				visible={props.isOpen}
				onOk={props.handleOk}
				confirmLoading={props.confirmLoading}
				onCancel={props.toggle}
				footer={[
					<Button key="back" onClick={props.handleOk}>
					  Return Home
					</Button>
				  ]}
			>
				<p>{props.modalText}</p>
			</Modal>
		</>
	);
};

export default ModalCustom;