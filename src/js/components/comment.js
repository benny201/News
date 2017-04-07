/**
 * Created by benny on 17/2/24.
 */
import React from 'react';
import { Card } from 'antd';
import {Row, Col} from 'antd';
import { Tabs,Input, Form, Button,notification} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Comment extends React.Component {


    constructor () {
        super();
        this.state = {
            comments: ''
        };
    };

    componentDidMount() {
        let fecthOption = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, fecthOption).
        then(response => response.json()).
        then(json => {
            this.setState({comments: json});
        });


    };

    handleSubmit(e) {
        e.preventDefault();
        let fecthOption = {
            method: 'GET'
        };

        let formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userId + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, fecthOption).
        then(response => response.json()).
        then(json => {
            this.componentDidMount();
        });


    };

    collect() {
        let fetchOption = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userId + "&uniquekey=" + this.props.uniquekey, fetchOption).
        then(response => response.json()).
        then(json => {
            //收藏成功以后进行一下全局的提醒
            notification['success']({message: '提醒', description: '收藏此文章成功'});
        });

    }


    render () {

        let {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length ?
            comments.map((comment, index) => (
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于{comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '暂时没有评论!';
        return(
            <div className="comment">
                <Row>
                    <Col span={24}>
                        <hr/>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark', {
                                    rules: [{required: false, message: '输入评论!'}],
                                })(
                                    <Input  type="textarea" placeholder="输入评论"/>
                                )}
                            </FormItem>
                            <Button  htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;
                            <Button  htmlType="button" onClick={this.collect.bind(this)}>收藏</Button>
                        </Form>

                    </Col>
                </Row>
            </div>
        );
    }
}


export default Comment = Form.create({})(Comment);
