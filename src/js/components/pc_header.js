import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Tabs, Modal, message, Input, Form, Button, Checkbox} from 'antd';
var headerCss = require('../../css/pc.css');

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'top',
            visible: false,
            action: 'login',
            hasLogin: false,
            userNickName: '',
            userId: 0
        }
    }

    // functions for models
    showModal() {
        this.setState({
            visible: true,
        });

    };

    handleOk() {
        console.log('Clicked OK');
        this.setState({
            visible: false,
        });
    };

    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleClick (e) {
        if (e.key == "register") {
            this.setState({current: 'register', visible: true});
        } else {
            this.setState({current: e.key});
        }
    }

    handleSubmit(e) {
        
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogin ?
                <Menu.Item key="logout" class="register">
                    <Button type="primary">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="primary" htmlType="button">个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type="primary" htmlType="button">登出</Button>
                </Menu.Item>
                :
                <Menu.Item key="register" class="register">
                    <Icon type="appstore"/>注册/登录
                </Menu.Item>
            ;

        return (
            <header className={headerCss.header} id="pc_header">
                <Row>
                    <Col span={2}>1111</Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/images/news1.png" alt="here's the logo"/>
                            <span>BennyNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>

                            <Menu.Item key="sports">
                                <Icon type="appstore"/>体育
                            </Menu.Item>

                            <Menu.Item key="techs">
                                <Icon type="appstore"/>科技
                            </Menu.Item>

                            <Menu.Item key="international">
                                <Icon type="appstore"/>国际
                            </Menu.Item>

                            <Menu.Item key="china">
                                <Icon type="appstore"/>国内
                            </Menu.Item>

                            <Menu.Item key="fashion">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>

                            <Menu.Item key="entertainment">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>

                            <Menu.Item key="military">
                                <Icon type="appstore"/>军事
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Button type="primary" onClick={this.showModal.bind(this)}></Button>
                        <Modal title="用户中心" visible={this.state.visible}
                               onOk={this.handleOk.bind(this)}
                               onCancel={this.handleCancel.bind(this)}
                               wrapClassName="vertical-center-modal">

                            <Tabs type="line">
                                <TabPane tab="注册" key="1">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input addonBefore={<Icon type="user" />} placeholder="Username"
                                                   {...getFieldDecorator('register_name')}/>
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password"
                                                   {...getFieldDecorator('register_password')}/>
                                        </FormItem>
                                        <FormItem label="再次输入密码">
                                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password"
                                                   {...getFieldDecorator('register_repassword')}/>
                                        </FormItem>
                                    </Form>
                                    <Button type="primary" htmlType="submit">注册</Button>
                                </TabPane>
                            </Tabs>

                        </Modal>

                    </Col>
                    <Col span={2}>1111</Col>
                </Row>
            </header>

        )


    };
}

export default PCHeader = Form.create({})(PCHeader);