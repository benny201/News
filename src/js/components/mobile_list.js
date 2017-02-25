/**
 * Created by benny on 17/2/24.
 */
import React from 'react';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {Router, Route, Link} from 'react-router';

export default class MobileList extends React.Component {


    constructor() {
        super();
        this.state = {
            news: '',
        }
    }


    componentWillMount() {
        let fetchOption = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption).then(response => response.json()).then(json => this.setState({
            news: json
        }));
    }


    render() {

        const {news} = this.state;
        const newsList = news.length ?
            news.map((newsItem, index) => (

                <section key={index} className="m_article">
                    <Link to={`details/${newsItem.uniquekey}`}>
                        <div className="m_article_img">
                            <img src={newsItem.thumbnail_pic_s} alt="photo"/>
                        </div>

                        <div className="m_article_info">
                            <div className="m_article_title">
                                    <span>
                                        {newsItem.title}
                                    </span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                        <span className="m_article_channel">
                                            {newsItem.realtype}
                                        </span>
                                        <span className="m_article_span">
                                            {newsItem.realtype}
                                        </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>

            ))
            :
            '没有加载到新闻';


        return (
            <div>
                <Row>
                    <Col span={24}>
                        {newsList};
                    </Col>
                </Row>
            </div>
        );
    }
}
