import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';

var MediaQuery = require('react-responsive');

import {Button} from 'antd'
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCDetail from './components/pc_detail';
import MobileDetail from './components/mobile_detail';

import {Router, Route, hashHistory} from 'react-router';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCDetail}></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}></Route>
                        <Route path="/details/:uniquekey" component={MobileDetail}></Route>
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