/**
 * Created by benny on 17/3/8.
 */
import React from 'react';
import { Card } from 'antd';
import {Row, Col} from 'antd';
import { Tabs,Input, Form, Button,notification,Upload,Icon,message,Modal} from 'antd';
import { Router, Route, Link } from 'react-router';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {

    constructor() {
        super();
        this.state = {
            usercollection: '',
            usercomments: '',
            previewImage: '',
            previewVisible: false
        };
    };

    handleOnCancle() {

    }

    render() {

        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    state: 'done',
                    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file) => {
                this.setState({previewImage: file.url, previewVisible: true});
            }
        };

        return (

            <div>
                <PCHeader/>

                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">

                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">

                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="upload"/>
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleOnCancle.bind(this)}>
                                        <img src={this.state.previewImage} alt="预览"/>
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <PCFooter/>
            </div>
        );
    }
}

