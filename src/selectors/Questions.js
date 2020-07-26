import { createSelector } from 'reselect'

const getQuestions = state => state.questions

export const getList = createSelector(
   [getQuestions],
   questions => (
      questions      
      )
   )