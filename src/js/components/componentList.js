/**
 * Created by benny on 17/2/21.
 */
import React from 'react';
import ReactDom from 'react-dom';

export default class ComponentList extends React.Component {
    render() {
        return (
            <p>hello list id: {this.props.params.id}</p>
        );
    }
}