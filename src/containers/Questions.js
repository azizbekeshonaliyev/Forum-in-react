import { connect } from 'react-redux'
import QuestionList from '../views/Question/QuestionList'
import { addQuestion } from "../actions/questions";
import { getList } from "./../selectors/Questions";

const mapStateToProps = (state) => {
    return {
      questions: getList(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addQuestion: (payload) => {
        dispatch(addQuestion(payload))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList)
