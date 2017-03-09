/**
 * Created by benny on 17/3/8.
 */
/**
 * Created by benny on 17/3/8.
 */
import React from 'react';
import { Card } from 'antd';
import {Row, Col} from 'antd';
import { Tabs,Input, Form, Button,notification} from 'antd';
import { Router, Route, Link } from 'react-router';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'


export default class MoblieUserCenter extends React.Component {
    render() {
        return (

            <div>
                <MobileHeader/>

                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">

                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">

                            </TabPane>
                            <TabPane tab="头像设置" key="3">

                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>

                <MobileFooter/>
            </div>
        );
    }
}

