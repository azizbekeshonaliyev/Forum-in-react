import React, { Component } from 'react'
import QuestionItem from './QuestionItem';
import RightMenu from './RightMenu';

export default class QuestionList extends Component {
    constructor(props) {
        super(props);
        let item =             {
            title: '10 Kids Unaware of Their Halloween Costume',
            desc: "It's one thing to subject yourself to a Halloween costume mishap because, hey, that's your prerogative."
        };
        this.state = { questions: Array(20).fill(item) };
    }
    render() {
        return (
	        <div className="row pt-4">
                <div className="col-12 col-sm-12 col-md-9">
                    <QuestionItem questions={this.questions}></QuestionItem>
                </div>
                <RightMenu></RightMenu>                    
            </div>
        )
    }
}
