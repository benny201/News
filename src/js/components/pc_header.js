import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
var headerCss = require('../../css/pc.css');


export default class PCHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }


    render() {
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
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>

                            <Menu.Item key="sports">
                                <Icon type="appstore" />体育
                            </Menu.Item>

                            <Menu.Item key="techs">
                                <Icon type="appstore" />科技
                            </Menu.Item>

                            <Menu.Item key="international">
                                <Icon type="appstore" />国际
                            </Menu.Item>

                            <Menu.Item key="china">
                                <Icon type="appstore" />国内
                            </Menu.Item>

                            <Menu.Item key="fashion">
                                <Icon type="appstore" />时尚
                            </Menu.Item>

                            <Menu.Item key="entertainment">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>

                            <Menu.Item key="military">
                                <Icon type="appstore" />军事
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2} >1111</Col>
                </Row>
            </header>

        )


    };
}