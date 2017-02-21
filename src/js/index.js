var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/indexBody';
import 'antd/dist/antd.css';

export default class Index extends React.Component {

    componentWillMount() {
        console.log("index-will-count");
    }
    componentDidMount() {
        console.log("index-did-count");
    }



    render() {
        return (
            <div>
                <ComponentHeader/>
                <BodyIndex hi = {"fuck you react.js"}/>
                <div>
                    {this.props.children}
                </div>
                <ComponentFooter/>
            </div>
        )
    };
}


