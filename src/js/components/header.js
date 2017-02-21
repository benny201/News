import React from 'react';
import {Link} from 'react-router';
export default class ComponentHeader extends React.Component {

    constructor() {
      super();
      this.state = {
          miniHeader : false
      }
    };

    switchHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        });
    };

    render() {
        const styleComponentHear = {
            header: {
                backgroundColor: "#333333",
                color: "#FFFFFF",
                "padding-top": (this.state.miniHeader) ?  "3px" : "15px",
                paddingBottom: (this.state.miniHeader) ?  "3px" : "15px"
            },

        };
        return (
            <header style={styleComponentHear.header} >
                <h1>这里是头部!!!!!!!!</h1>
                <ul>
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/details'}>详细页面</Link></li>
                    <li><Link to={'/list/1234'}>首页</Link></li>
                </ul>
            </header>
        )
    };
}
