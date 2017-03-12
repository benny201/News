import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';

var MediaQuery = require('react-responsive');

import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCDetail from './components/pc_detail';
import MobileDetail from './components/mobile_detail';
import PCUserCenter from './components/pc_usercenter';
import MoblieUserCenter from './components/moblie_usercenter';
import PCPersonalIndex from './components/pc_personalIndex';
import {Router, Route, hashHistory} from 'react-router';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCDetail}></Route>
                        <Route path="/mypage" component={PCPersonalIndex}></Route>
                        <Route path="/usercenter" component={PCUserCenter}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}></Route>
                        <Route path="/details/:uniquekey" component={MobileDetail}></Route>
                        <Route path="/usercenter" component={MoblieUserCenter}/>
                    </Router>
                </MediaQuery>

            </div>

        );
    };
}


ReactDOM.render(
    <Root/>,
    document.getElementById('mainContainer')
);