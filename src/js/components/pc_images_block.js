/**
 * Created by benny on 17/2/24.
 */
import React from 'react';
import {Card} from 'antd';
import { Router, Route, Link } from 'react-router';

export default class PCImagesBlock extends React.Component {


    constructor() {
        super();
        this.state = {
            news: '',
        }
    }


    componentDidMount() {
        let fetchOption = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption).
        then(response => response.json()).
        then(json => this.setState({
            news: json
        }));
    }




    render() {

        const styleImage = {
            display: "block",
            width: this.props.imagesWidth,
            height: "90px",
        };
        const styleH3 = {
            width: this.props.imagesWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };

        const styleP = {
            width: this.props.imagesWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };

        const {news} = this.state;
        const newsList = news.length ?
            news.map((newsItem, index) => (
                <div key={index} className="imageblock">
                    <Link to={'details/${newsItem.uniquekey}'} target="_blank"/>
                    <div className="custom-image">
                        <img src={newsItem.thumbnail_pic_s} style={styleImage} alt="photos"/>
                    </div>
                    <div className="custom-card">
                        <h3 style={styleH3}>{newsItem.title}</h3>
                        <p style={styleP}>{newsItem.author_name}</p>
                    </div>
                </div>
            ))
            :
            '没有加载到新闻';


        return (
            <div className="topBlockList clearfix">
                <Card title={this.props.cardTitle} bordered={true} style={{width: this.props.width}}>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    }
}
