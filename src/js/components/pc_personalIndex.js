/**
 * Created by benny on 17/3/12.
 */
import React from 'react';
import PCFooter from './pc_footer';
import PCHeader from './pc_header';
import PCPersonalContainer from './pc_personalcontainer';

export default class PCPersonalIndex extends React.Component {
    constructor() {
        super();
    }



    render () {
        return (
            <div>
                <PCHeader/>
                <PCPersonalContainer/>
                <PCFooter/>
            </div>
        )
    };
}
