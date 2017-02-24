/**
 * Created by benny on 17/2/21.
 */
import React from 'react'

import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import {Menu, Icon, Tabs, Modal, message, Input, Form, Button, Checkbox} from 'antd';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {

    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="社会" key="2">Content of Tab Pane 1</TabPane>
                    <TabPane tab="国内" key="3">Content of Tab Pane 1</TabPane>
                    <TabPane tab="国际" key="4">Content of Tab Pane 1</TabPane>
                    <TabPane tab="科技" key="5">Content of Tab Pane 1</TabPane>
                    <TabPane tab="娱乐" key="6">Content of Tab Pane 1</TabPane>
                    <TabPane tab="军事" key="7">Content of Tab Pane 1</TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}