import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import classes from './Form.module.css';
import {useNavigate} from 'react-router-dom';

import ModalCustom from './ModalCustom';

const RSVPForm = () => {
    const [form] = Form.useForm();
    const [values, setValues] = useState(
        {
            currentDate: Date().toLocaleString()
        });
    // vis only affects the add guest button
    const [vis, setVis] = useState(true);
    const [attendField, setField] = useState(false);
    const [submitVis, setSubmitVis] = useState(true);
    const [req, setReq] = useState(true);

    // Modal State
    const [modalVis, setModalVis] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Thank You!');

    // Error State
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    
    const toggleModal = () => {
        setModalVis(!modalVis);
    }

    const handleOk = () => {
        setModalText('You will now be redirected to the home page.');
        setConfirmLoading(true);
        setTimeout(() => {
            navigate("/", {replace: true})
            setModalVis(false);
            setConfirmLoading(false);
        }, 2000);
      };
    
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setModalVis(false);
    };

    const onSubmit = (data) => {
        try {
            if (error === false) {
                console.log("Success:", data);
                console.log('Value State:', values);
                axios.post('https://sheet.best/api/sheets/d95b68c6-1f76-425a-9b46-39b5c15a1583', values)
                .then(response => {
                    console.log(response.data);
                    toggleModal();
                })   
            } 
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    const isEmailValid = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const emailChange = (e) => {
        console.log(isEmailValid(e.target.value));
        e.preventDefault();
        const value = e.target.value;
        setValues({
            ...values,
            [e.target.name]: value,
        });
        if (!isEmailValid(e.target.value)) {
            setError(true);
        } else {
            setError(false);
        }
        isRequired();
    }

    const valueChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setValues({
            ...values,
            [e.target.name]: value,
        });
        isRequired();
    }

    const isRequired = () => {
        if (attendField === false) {
           return setReq(true);
        } else {
           return setReq(false);
        }
    }

    const fields = 
        <>
            <Form.List name="inputs">
                {(fields, { add, remove}) => (
                <>
                    {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} className={classes.guestForm} align="baseline" wrap>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                        <Form.Item
                        {...restField}
                        label="First Name"
                        name={[name, 'first']}
                        rules={[{ required: true, message: 'Missing first name' }]}
                        >
                            <Input name={[name, "first"]} placeholder="First Name" value={values.first} onChange={valueChange}/>
                        </Form.Item>
                        <Form.Item
                        // {...innerLayout}
                        {...restField}
                        label="Last Name"
                        name={[name, 'last']}
                        rules={[{ required: true, message: 'Missing last name' }]}
                        >
                            <Input name={[name, 'last']} placeholder="Last Name" value={values.last} onChange={valueChange} />
                        </Form.Item>
                        {/* NEW MEAL SELECTION */}
                        <Form.Item 
                            {...restField}
                            label="Preferred Meal"
                            name={[name, 'meal']}
                            rules={[{required: req, message: 'Missing Meal Selection'}]}
                        >
                            <Radio.Group
                                name={[name, 'meal']}
                                disabled={attendField}
                                value={values.meal}
                                onChange={valueChange}
                            >
                                <Space direction='vertical'>
                                    <Radio value="Chicken">Chicken</Radio>
                                    <Radio value="Steak">Steak</Radio>
                                    <Radio value="Vegetarian">Vegetarian</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Allergies"
                                {...restField}
                                name={[name, 'allergies']}>
                            <Input.TextArea disabled={attendField} onChange={valueChange} name={[name, 'allergies']} value={values.allergies} placeholder='List any allergies here'/>
                        </Form.Item>
                    </Space>   
                    ))}
                    <Form.Item>
                        {fields.map((obj) => (
                            obj.name >= 3 ? setVis(true) : setVis(false)
                        ))}
                        <Button disabled={vis} type="dashed" onClick={() => {
                            setSubmitVis(false);
                            add();
                        }} icon={<PlusOutlined />}>
                            Add Guest
                        </Button>
                    </Form.Item> 
                </>
                )}
            </Form.List>
        </>

    const onAttenChange = (value) => {
        switch (value) {
          case 'yes':
            setField(false);
            setVis(false);
            setValues({
                ...values,
                attendance: value
            });
            break;
    
          case 'no':
            setField(true);
            setVis(false);
            setValues({
                ...values,
                attendance: value,
            });
            break;

          default:
            setField(null);
            setVis(null);
            setValues({...values});
        }
    }
      
  return (
    <Form className={classes.formWrapper} form={form} name="dynamic_rule" layout='vertical' onFinish={onSubmit}>
        <Form.Item
            label="Attending?"
            name="attendance"
            rules={[{ required: true, message: 'Missing attendance' }]}
        >
            <Select value={values.attendance} placeholder="Select Yes or No" onChange={onAttenChange}>
                <Select.Option value="yes">Yes</Select.Option>
                <Select.Option value="no">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item
            label="Contact Email"
            name="email"
            rules={[{ required: true}]}>
            <Input onChange={emailChange} name={"contactEmail"} value={values.contactEmail} placeholder='Type a contact Email address for your RSVP.'/>
        </Form.Item>
            {error && <h3 style={{color: 'red'}}>{"Invalid Email"}</h3>}
            {fields}
        <Form.Item>
            <Button disabled={submitVis} type="primary" htmlType="submit">
                Submit
            </Button>
            <ModalCustom isOpen={modalVis} toggle={toggleModal}
                         confirmLoading={confirmLoading} modalText={modalText}
                         handleOk={handleOk} handleCancel={handleCancel}
            />
        </Form.Item>       
    </Form>
    );
};

export default RSVPForm;