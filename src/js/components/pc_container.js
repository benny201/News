/**
 * Created by benny on 17/2/24.
 */
import React from 'react';

import { Carousel } from 'antd';
import {Row, Col} from 'antd';
import { Router, Route, Link } from 'react-router';
import {Menu, Icon, Tabs, Modal, message, Input, Form, Button, Checkbox} from 'antd';


//news_block

import PCNewsBlock from './pc_news_block';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class PCContainer extends React.Component{

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container clearfix">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel autoplay>
                                    <div><img src="./src/images/james.jpg" alt="photo1"/></div>
                                    <div><img src="./src/images/huston.jpg" alt="photo1"/></div>
                                    <div><img src="./src/images/lilard.jpg" alt="photo1"/></div>
                                    <div><img src="./src/images/jordan.jpg" alt="photo1"/></div>
                                </Carousel>
                            </div>
                        </div>

                        <Tabs className="tabs_news">
                            <TabPane key="1" tab="新闻">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane key="2" tab="娱乐">
                                <PCNewsBlock count={22} type="yule" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane key="3" tab="体育">
                                <PCNewsBlock count={22} type="tiyu" width="100%" bordered="false"/>
                            </TabPane>

                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}