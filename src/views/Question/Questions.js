import React, { Component } from 'react'
import QuestionItem from './QuestionItem';
import CreateQuestionButton from './../Buttons/CreateQuestionButton';

export default class Questions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="row my-1">
                    <div className="col-8">
                        <h4>Top Questions</h4>
                    </div>
                    <div className="col-4 text-right">
                        <CreateQuestionButton></CreateQuestionButton>
                    </div>
                </div>
                {this.props.questions.map(item => (
                    <QuestionItem key={item.id} question={item}></QuestionItem>
                ))}
                <div className="col-12 my-3">
                    <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Oldingi</span>
                    </li>
                    <li className="page-item active">
                        <span className="page-link">
                        2
                        </span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Keyingi</a>
                    </li>
                    </ul>
                </div>
            </>
        )
    }
}
