import { Modal } from 'antd';
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
			>
				<p>{props.modalText}</p>
			</Modal>
		</>
	);
};

export default ModalCustom;