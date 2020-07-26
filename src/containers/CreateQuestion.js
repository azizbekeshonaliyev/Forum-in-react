import { connect } from 'react-redux'
import CreateQuestion from '../views/Question/CreateQuestion'
import { addQuestion } from "../actions/questions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    addQuestion: (payload) => {
        dispatch(addQuestion(payload))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(CreateQuestion)
