import { ADD_QUESTION, DELETE_QUESTION, EDIT_QUESTION, COMPLETE_QUESTION } from "../../constants/actionTypes";

const initialState = [
    {
      title: 'The first forum question',
      desc: "Янги касалланиш ҳолатларининг 45 нафари Карантин марказидаги (барчаси хориждан келган) фуқаролар орасида, 77 нафари Тошкент шаҳрида тана ҳарорати кўтарилганлиги туфайли профилактика мақсадида ҳамда коронавирусга чалинган беморлар билан мулоқотда бўлганлиги сабабли намуна олинган фуқаролар орасида, 36 нафари Андижон вилоятида, 22 нафари Наманган вилоятида, 18 нафари Тошкент вилоятида, 17 нафари Бухоро вилоятида, 15 нафари Сирдарё вилоятида, 9 нафари Самарқанд вилоятида, 3 нафари Сурхондарё вилоятида ҳамда 1 нафари Жиззах вилоятида коронавирусга чалинган беморлар билан мулоқотда бўлганлиги сабабли намуна олинган фуқаролар орасида аниқланган.",
      completed: false,
      id: 0
    }
  ]

export default function questions(state = initialState, action) {
    switch (action.type) {
        case ADD_QUESTION:
          return [
            ...state,
            {
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
              title: action.payload.title,
              desc: action.payload.desc,
              completed: false,
            }
          ]
    
        case DELETE_QUESTION:
          return state.filter(todo =>
            todo.id !== action.id
          )
    
        case EDIT_QUESTION:
          return state.map(todo =>
            todo.id === action.id ?
              { ...todo, title: action.title, desc: action.desc } :
              todo
          )
    
        case COMPLETE_QUESTION:
          return state.map(todo =>
            todo.id === action.id ?
              { ...todo, completed: !todo.completed } :
              todo
          )
        
        default:
          return state
      }
}