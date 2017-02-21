var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/indexBody';

class Index extends React.Component {

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
                <ComponentFooter/>
            </div>
        )
    };
}

ReactDOM.render(
    <Index/>,
    document.getElementById('example')
);
