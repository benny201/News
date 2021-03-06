import React from 'react';
import {Row, Col} from 'antd';
import { Link } from 'react-router'
import {Menu, Icon, Tabs, Modal, message, Input, Form, Button, Checkbox} from 'antd';
import 'whatwg-fetch'
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

    //before mount
    componentWillMount() {
        if (localStorage.userId != '') {
            this.setState({
                hasLogin: true,
                userNickName: localStorage.userNickName,
                userId: localStorage.userId,
            });
        }
    }

    // functions for modals
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

    handleClick(e) {
        if (e.key == "register") {
            this.setState({current: 'register', visible: true});
        } else {
            this.setState({current: e.key});
        }
    }

    handleSubmit(e) {
        //log bubbling
        e.preventDefault();

        let fetchOptions = {
            method: 'GET'
        };

        let formData = this.props.form.getFieldsValue();
        console.log(formData);



        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username="+formData.userName+"&password="+formData.password
            +"&r_userName=" + formData.register_name + "&r_password="
            + formData.register_password + "&r_confirmPassword="
            + formData.register_repassword, fetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: '欢迎: '+json.NickUserName, userId: json.UserId});
                localStorage.userId= json.UserId;
                localStorage.userNickName = '欢迎: ' + json.NickUserName;
            });

        if (this.state.action == "login") {
            this.setState({hasLogin: true});
        }


        message.success("yes!");

        this.setState({
            visible: false,
        });
    }

    callback(key) {
        if (key == 1) {
            this.setState({action: 'login'});
        } else {
            this.setState({action: "register"});
        }
    };

    logout () {
        localStorage.userId= '';
        localStorage.userNickName = '';
        this.setState({hasLogin: false});
    }


    render() {
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogin ?
                <Menu.Item key="login" className="register">
                    <Button >{this.state.userNickName}</Button>

                    <Link target="_blank" className="register clearfix" to={'/usercenter'}>
                        <Button  htmlType="button">个人中心</Button>
                    </Link>

                    <Button  htmlType="button" onClick={this.logout.bind(this)}>登出</Button>
                </Menu.Item>
                :
                <Menu.Item key="register" className="register">
                    <Icon type="select" />注册/登录
                </Menu.Item>
            ;

        return (
            <header className={headerCss.header} id="pc_header">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <a href="/" className="logo">
                            {/*<img src="./src/images/news1.png" alt="here's the logo"/>*/}
                            <span>Benny's Site</span>
                        </a>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Menu mode="horizontal" theme="dark"
                              onClick={this.handleClick.bind(this)}
                              selectedKeys={[this.state.current]}
                              className="menu-color"
                        >
                            <Menu.Item key="top">
                                <Link to={'/'}>
                                    <Icon type="play-circle" />首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="frontend">
                                <Link to={'/mypage'}>
                                    <Icon type="like" />个人
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="react">
                                <a href="http://react-china.org">
                                    <Icon type="star-o" />React
                                </a>
                            </Menu.Item>
                            <Menu.Item key="nba">
                                <Link>
                                    <Icon type="smile-o" />NBA
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="blog">
                                <a href="https://github.com/benny201">
                                    <Icon type="github" />Github
                                </a>
                            </Menu.Item>

                            {userShow}
                        </Menu>


                        <Modal title="用户中心" visible={this.state.visible}
                               onOk={this.handleOk.bind(this)}
                               onCancel={this.handleCancel.bind(this)}
                               wrapClassName="vertical-center-modal">

                            <Tabs type="card" onChange={this.callback.bind(this)}>

                                <TabPane tab="登录" key="1">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('userName', {
                                                rules: [{required: true, message: 'Please input your Username!'}],
                                            })(
                                                <Input addonBefore={<Icon type="user"/>} type="password"
                                                       placeholder="Username"/>
                                            )}

                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('password', {
                                                rules: [{required: true, message: 'Please input your Username!'}],
                                            })(
                                                <Input addonBefore={<Icon type="lock"/>} type="password"
                                                       placeholder="Password"/>
                                            )}

                                        </FormItem>
                                        <Button htmlType="submit">登录</Button>
                                    </Form>


                                </TabPane>


                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {/*<Input addonBefore={<Icon type="user" />} placeholder="Username"*/}
                                            {/*{...getFieldDecorator('register_name')}/>*/}

                                            {getFieldDecorator('register_name', {
                                                rules: [{required: true, message: 'Please input your Username!'}],
                                            })(
                                                <Input addonBefore={<Icon type="user"/>} type="password"
                                                       placeholder="Username"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {/*<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password"*/}
                                            {/*{...getFieldDecorator('register_password')}/>*/}

                                            {getFieldDecorator('register_password', {
                                                rules: [{required: true, message: 'Please input your Password!'}],
                                            })(
                                                <Input addonBefore={<Icon type="lock"/>} type="password"
                                                       placeholder="Password"/>
                                            )}
                                        </FormItem>

                                        <FormItem label="再次输入密码">
                                            {/*<Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password"*/}
                                            {/*{...getFieldDecorator('register_repassword')}/>*/}

                                            {getFieldDecorator('register_repassword', {
                                                rules: [{required: true, message: 'Please input your Password again!'}],
                                            })(
                                                <Input addonBefore={<Icon type="lock"/>} type="password"
                                                       placeholder="Password again"/>
                                            )}
                                        </FormItem>
                                        <Button htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={4}></Col>
                </Row>
            </header>

        )


    };
}

export default PCHeader = Form.create({})(PCHeader);