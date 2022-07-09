import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Radio, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import classes from './Form.module.css';

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

    const onSubmit = (data) => {
        try {
            console.log("Success:", data);
            console.log('Value State:', values);
            axios.post('https://sheet.best/api/sheets/f98f8690-4a41-406d-a8c2-4a2e5010f64c', values)
            .then(response => {
                console.log(response.data);
                let countDown = 10;
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
            })    
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    const valueChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setValues({
            ...values,
            [e.target.name]: value,
        });
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
                            rules={[{required: vis, message: 'Missing Meal Selection'}]}
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
                        {/* OLD MEAL SELECTION */}
                        {/* <Form.Item
                            // {...outerLayout}
                            {...restField}
                            label="Preferred Meal"
                            name={[name, 'meal']}
                            rules={[{ required: vis, message: 'Missing meal selection' }]}
                        >
                            <Select
                                disabled={attendField}
                                value={values.meal}
                                onChange={mealChange}
                                placeholder="Select your meal"
                                allowClear
                            >
                                <Select.Option name={[name, 'meal']} value="chicken" >Chicken</Select.Option>
                                <Select.Option name={[name, 'meal']} value="steak">Steak</Select.Option>
                                <Select.Option name={[name, 'meal']} value="vegetarian">Vegetarian</Select.Option>
                            </Select>
                        </Form.Item> */}
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
    <Form form={form} name="dynamic_rule" layout='vertical' onFinish={onSubmit}>
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
        {fields}
        <Form.Item>
            <Button disabled={submitVis} type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    );
};

export default RSVPForm;