import React from 'react';
import ReactDOM from 'react-dom';

import BodyChild from './bodyChild';
import MixinLog from './Mixins';
import ReactMixin from 'react-mixin';
const defaultProps = {
    hi: '这是一个默认值'
}

export default class BodyIndex extends React.Component {

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    //
    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    constructor() {
        super();
        this.state = {username: "benny"};
    }

    changeInfo() {
        this.setState({username: "hi boss"});
        // //first
        // let mySubmitButton = document.getElementById("submitButton");
        // ReactDOM.findDOMNode(mySubmitButton).style.color = "red";

        //second
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color = "red";
        MixinLog.log();


    };

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    render() {

        // setTimeout(() => {
        //     this.setState({username: "Wu"})
        // }, 4000);

        return (
            <div>
                <h1>页面主题!!</h1>
                <p>接收到的父页面的属性：{this.props.hi}</p>
                <p>{this.state.username}</p>
                <p>接受到的子页面的属性<input id="submitButton" ref="submitButton" type="button" value="Submit" onClick={this.changeInfo.bind(this)}/></p>
                <BodyChild handleChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}

BodyIndex.propTypes = {
    hi: React.PropTypes.string.isRequired
};

BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.prototype, MixinLog);