import { rootReducer } from './reducers'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// const middlewares = [loggerMiddleware, thunkMiddleware]
// export const store = createStore(rootReducer)

import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
    reducer: rootReducer,
})
export default store
