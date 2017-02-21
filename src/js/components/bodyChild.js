/**
 * Created by benny on 17/2/20.
 */
import React from 'react';

export default class BodyChild extends React.Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleChange}/>
            </div>

        )
    }
}