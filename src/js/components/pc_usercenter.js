/**
 * Created by benny on 17/3/8.
 */
import React from 'react';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {Tabs, Input, Form, Upload, Icon, message, Modal} from 'antd';
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

    componentDidMount() {
        var fecthOption = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userId, fecthOption)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercollection:json});
            });

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userId, fecthOption)
            .then(response=>response.json())
            .then(json=>{
                this.setState({usercomments:json});
            });

    };



    render() {

        const {usercollection,usercomments} = this.state;
        const usercollectionList = usercollection.length ?
            usercollection.map((uc,index)=>(
                <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            '您还没有收藏任何的新闻，快去收藏一些新闻吧。';

        const usercommentsList = usercomments.length ?
            usercomments.map((comment,index)=>(
                <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '您还没有发表过任何评论.';


        {/*const props = {*/}
            {/*action: 'http://newsapi.gugujiankong.com/handler.ashx',*/}
            {/*headers: {*/}
                {/*"Access-Control-Allow-Origin": "*"*/}
            {/*},*/}
            {/*listType: 'picture-card',*/}
            {/*defaultFileList: [*/}
                {/*{*/}
        //             uid: -1,
        //             name: 'xxx.png',
        //             state: 'done',
        //             url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
        //             thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        //         }
        //     ],
        //     onPreview: (file) => {
        //         this.setState({previewImage: file.url, previewVisible: true});
        //     }
        // };

        return (

            <div>
                <PCHeader/>

                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div class="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div class="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercommentsList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="upload"/>
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null}
                                           onCancel={this.handleOnCancle.bind(this)}>
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

