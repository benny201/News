import React from 'react';

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

    render() {

        setTimeout(() => {
            this.setState({username: "Wu"})
        }, 4000);

        return (
            <div>
                <h1>页面主题</h1>
                <p>{this.state.username}</p>
            </div>
        )
    }
}