import React, { Component } from 'react'
import QuestionItem from './QuestionItem';
import RightMenu from './RightMenu';
import Create from './Create';
import uuid from  'uuid';
export default class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            questions: [],
            title: '',
            desc: '',
            id: uuid()
        };
    }
    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }
    handleDescChange = e => {
        this.setState({
            desc: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()

        const item = {
            title: this.state.title,
            desc: this.state.desc
        }

        this.props.addQuestion(item)

        this.setState({
            title: '',
            desc: '',
        })
    }
    render() {
        return (
	        <div className="row pt-4">
                <div className="col-12 col-sm-12 col-md-9">
                    {this.props.questions.map(item => (
                        <QuestionItem key={item.id} question={item}></QuestionItem>
                    ))}
                    <Create 
                        submit={this.handleSubmit} 
                        handleTitleChange={this.handleTitleChange}
                        handleDescChange={this.handleDescChange}
                        title={this.state.title}
                        desc={this.state.desc}
                    ></Create>
                </div>
                <RightMenu></RightMenu>                    
            </div>
        )
    }
}
