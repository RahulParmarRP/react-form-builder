import { combineReducers } from 'redux'
import formsReducer from './forms.reducer'
export const rootReducer = combineReducers({
  forms: formsReducer,
})
export default rootReducer
