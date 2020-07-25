import React, { Component } from 'react'
import QuestionItem from './QuestionItem';
import Create from './Create';
import uuid from  'uuid';

export default class Questions extends Component {
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
            <>
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
            </>
        )
    }
}
