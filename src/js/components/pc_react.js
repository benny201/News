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
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个感悟</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">又一个react pc网站</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">使用koa和react开发web在线聊天室 - 持续更新</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个自己做的react+redux实现的已上线的手机网站</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React开发在线聊天室V2.1</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">做了一个笔记和聊天与一体的网站：技术栈 react+redux+immutable+webpack</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">新上线的微信项目，采用了webpack + react + react-router + ES6 + flex-css-layout + redux + less</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React+redux+react-router个人博客开发</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React入门与进阶项目–帮助新手快速学习</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">用React做的一个学校网站</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">用 react + react-router + redux + webpack + es6 写的个人博客</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">Webpack + react + react-router + redux + ES6 小程序</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">求职前端偏react方向</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">发现一个国外很好的react教程</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个 react + redux 完整的项目，同时写一下个感悟</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">又一个react pc网站</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">使用koa和react开发web在线聊天室 - 持续更新</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">分享一个自己做的react+redux实现的已上线的手机网站</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React开发在线聊天室V2.1</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">做了一个笔记和聊天与一体的网站：技术栈 react+redux+immutable+webpack</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">新上线的微信项目，采用了webpack + react + react-router + ES6 + flex-css-layout + redux + less</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React+redux+react-router个人博客开发</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React入门与进阶项目–帮助新手快速学习</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">用React做的一个学校网站</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">用 react + react-router + redux + webpack + es6 写的个人博客</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">Webpack + react + react-router + redux + ES6 小程序</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">求职前端偏react方向</a>
                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">发现一个国外很好的react教程</a>

                        </li>
                        <li>
                            <a href="http://react-china.org/t/react-redux/9072/2">React入门与进阶项目–帮助新手快速学习</a>
                        </li>




                    </ul>
                </Card>
            </div>
        );
    }
}
