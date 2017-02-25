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
//news images
import PCImagesBlock from './pc_images_block';

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
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel autoplay>
                                    <div><img src="./src/images/james.jpg" alt="photo1"/></div>
                                    <div><img src="./src/images/huston.jpg" alt="photo1"/></div>
                                    <div><img src="./src/images/lilard.jpg" alt="photo1"/></div>
                                    <div><img src="./src/images/jordan.jpg" alt="photo1"/></div>
                                </Carousel>
                            </div>
                                <PCImagesBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imagesWidth="106px"/>
                        </div>


                        <Tabs className="tabs_news">
                            <TabPane key="1" tab="新闻">
                                <PCNewsBlock count={20} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane key="2" tab="娱乐">
                                <PCNewsBlock count={22} type="yule" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane key="3" tab="科技">
                                <PCNewsBlock count={31} type="keji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>


                        <div>
                            <PCImagesBlock count={16} type="guonei" width="100%" cardTitle="国内头条" imagesWidth="122px"/>
                            <PCImagesBlock count={16} type="yule" width="100%" cardTitle="娱乐" imagesWidth="122px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}