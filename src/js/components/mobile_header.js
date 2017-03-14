/**
 * Created by benny on 17/2/21.
 */
import React from 'react'
import { Router, Route, Link } from 'react-router';
import {Menu, Icon, Tabs, Modal, message, Input, Form, Button, Checkbox} from 'antd';
import 'whatwg-fetch'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {

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
    };

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
                localStorage.userNickName = json.NickUserName;
            });


        message.success("Succeed to register!");

        this.setState({
            visible: false,
        });

        if (this.state.action == "login") {
            this.setState({hasLogin: true});
        }

    }



    callback(key) {
        if (key == 1) {
            this.setState({action: 'login'});
        } else if (key == 2){
            this.setState({action: "register"});
        }
    };


    login() {
        this.setState({visible: true});
    };






    render() {

        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogin ?
            <Link to={'/usercenter'}>
                <Icon type="inbox" />
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>;



        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/news1.png" alt="here's the logo"/>
                    <span>BennyNews</span>
                    {userShow}
                </header>

                {/*modal part for register*/}
                <Modal title="用户中心" visible={this.state.visible}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}
                       wrapClassName="vertical-center-modal">





                    <Tabs type="card"  onChange={this.callback.bind(this)}>

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
                                <Button type="primary" htmlType="submit">登录</Button>
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
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>


            </div>);

    }
};

export default MobileHeader = Form.create({})(MobileHeader);