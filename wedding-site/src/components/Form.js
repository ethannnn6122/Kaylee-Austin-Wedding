import React from 'react';
import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const RSVPForm = () => {
    const [form] = Form.useForm();

    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    // const itemLayout = {
    //     labelCol: { span: 16 },
    //     wrapperCol: { span: 10 },
    //   };

    // const addLayout = {
    //     wrapperCol: { span: 24, offset: 1 },
    //     labelCol: { offset: 5 }
    // }

    // const outerLayout = {
    //     wrapperCol: { span: 12 }
    // }

  return (
    <Form form={form} name="dynamic_rule">
        <Form.List name="guests" layout="inline">
            {(fields, { add, remove }) => (
          <>
                {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                    {...restField}
                    label="First Name"
                    name={[name, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                    // {...innerLayout}
                    {...restField}
                    label="Last Name"
                    name={[name, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                        // {...outerLayout}
                        {...restField}
                        label="Preferred Meal"
                        name={[name, 'meal']}
                        rules={[{ required: true, message: 'Missing meal selection' }]}
                    >
                        <Select
                            placeholder="Select an option for your meal"
                            allowClear
                        >
                            <Select.Option value="chicken">Chicken</Select.Option>
                            <Select.Option value="beef">Beef</Select.Option>
                            <Select.Option value="vegetarian">Vegetarian</Select.Option>
                        </Select>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
                ))}
                <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Guests
                    </Button>
                </Form.Item>
          </>
        )}
        </Form.List>
        <Form.Item
            label="Attending?"
            name="attendance"
            rules={[{ required: true, message: 'Missing attendance' }]}
        >
            <Select
                allowClear
            >
                <Select.Option value="yes">Yes</Select.Option>
                <Select.Option value="no">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
                Submit
            </Button>
        </Form.Item>
    </Form>
    );
};

export default RSVPForm;