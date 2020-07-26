import React, { Component } from 'react'
import MostViewed from './Include/MostViewed';
import Tags from './Include/Tags';

export default class RightMenu extends Component {
    render() {
        return (
            <div className="col-12 col-sm-12 col-md-3">
                <MostViewed></MostViewed>    
                <Tags></Tags>            
            </div>
        )
    }
}
