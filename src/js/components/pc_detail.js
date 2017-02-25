import React from 'react';
import {Row, Col} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCImagesBlock from './pc_images_block';
import { BackTop } from 'antd';


export default class PCDetail extends React.Component {

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

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, fecthOption).
        then(response => response.json()).
        then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - Benny News";
        });


    };

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent}
    };


    render() {
        return (

            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6} offset={1}>
                        <PCImagesBlock count={42} type="top" width="400px"  imagesWidth="106px"/>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <PCFooter/>
                <BackTop/>
            </div>
        );
    }

}