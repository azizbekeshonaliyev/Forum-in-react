import { connect } from 'react-redux'
import QuestionShow from '../views/Question/QuestionShow'

const mapStateToProps = (state) => {
    return {
      question: (id) => {
         return state.questions.find(function(item) {
             return  parseInt(id) === item.id
         })
      },
    }
}

export default connect(
    mapStateToProps,
    null
)(QuestionShow)
