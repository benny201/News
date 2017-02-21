import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/componentList'
import Detail from './components/details'

import {Router, Route, hashHistory} from 'react-router';

export default class Root extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/">
                    <Route component={Detail} path="details"></Route>
                </Route>
                <Route component={ComponentList} path="list/:id"></Route>
            </Router>
        )


    };
}


ReactDOM.render(
    <Root/>,
    document.getElementById('example')
);