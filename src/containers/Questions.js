import { connect } from 'react-redux'
import Questions from '../views/Question/Questions'
import { addQuestion } from "../actions/questions";
import { getList } from "../selectors/Questions";

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
)(Questions)
