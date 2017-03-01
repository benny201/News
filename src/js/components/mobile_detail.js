/**
 * Created by benny on 17/2/24.
 */
import React from 'react';
import {Row, Col} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import Comment from './comment';
import {BackTop} from 'antd';


export default class MobileDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    };

    componentDidMount() {
        let fecthOption = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, fecthOption).then(response => response.json()).then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - Benny News";
        });


    };

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent}
    };


    render() {
        return (

            <div id="mobileDetailContainer">
                <MobileHeader/>
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            <hr/>
                            <Comment uniquekey={this.props.params.uniquekey}/>
                        </Col>
                    </Row>
                    <MobileFooter/>
                    <BackTop/>
                </div>
            </div>
        );
    }

}