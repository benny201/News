/**
 * Created by benny on 17/2/24.
 */
import React from 'react';
import {Card} from 'antd';
import { Router, Route, Link } from 'react-router';

export default class PCReactBlock extends React.Component {


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

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption).
        then(response => response.json()).
        then(json => this.setState({
            news: json
        }));
    }




    render() {

        const {news} = this.state;
        // const newsList = news.length ?
        //     news.map((newsItem, index) => (
        //         <li key={index}>
        //             <Link to={`details/${newsItem.uniquekey}`} target="_blank">
        //                 {newsItem.title}
        //             </Link>
        //         </li>
        //     ))
        //     :
        //     '没有加载到新闻';


        return (
            <div className="react clearfix">
                <Card title={this.props.cardTitle}>
                    <ul>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li><li>
                        <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                    </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个</a>
                        </li>




                    </ul>
                </Card>
            </div>
        );
    }
}
