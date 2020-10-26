



import { combineReducers } from 'redux'


export const initialState = {
    notes: [{value: 'sujith is a great guy'}]
  }

const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD':
          let notesNew = state.notes
          let obj = {
            value: action.payLoad
          }
          notesNew.unshift(obj)
          return { ...state, notes: notesNew }
        case 'DELETE':
            let notesNew1 = state.notes

            notesNew1.splice(index)
            return { ...state, notes: notesNew1 }
        case 'EDIT':
            let notesNew2 = state.notes
            let obj1 = {
              value: action.payLoad
            }
            notesNew2[index] = obj1
            return { ...state, notes: notesNew2 }
        default:
          return state
      }
}

// const rootReducer = combineReducers({
//   value1: rootReducer1,
//   value2: rootReducer2
// })


export default rootReducer;