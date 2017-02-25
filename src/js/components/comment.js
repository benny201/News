/**
 * Created by benny on 17/2/24.
 */
import React from 'react';
import { Card } from 'antd';
import {Row, Col} from 'antd';
import { Router, Route, Link } from 'react-router';
import {Menu, Icon, Tabs, Modal, message, Input, Form, Button, Checkbox} from 'antd';

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

    handleSubmit() {

    };


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
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('register_name', {
                                    rules: [{required: true, message: '输入评论'}],
                                })(
                                    <Input  type="textarea" placeholder="输入评论"/>
                                )}
                                <Button type="primary" htmlType="submit">提交评论</Button>
                            </FormItem>
                        </Form>

                    </Col>
                </Row>
            </div>
        );
    }
}


export default Comment = Form.create({})(Comment);
