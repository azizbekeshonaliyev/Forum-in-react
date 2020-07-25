import { connect } from 'react-redux'
import QuestionShow from '../views/Question/QuestionShow'

// const mapStateToProps = (state) => {
//     return {
//       questions: getList(state)
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     addQuestion: (payload) => {
//         dispatch(addQuestion(payload))
//     }
// })

export default connect(
    null,
    null
)(QuestionShow)
