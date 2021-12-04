// import todos from '../../__mock__/todos.json'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateId } from '../../utils'
const INITIAL_STATE = {
    todos: [],

    forms: [],
    currentForm:
    {
        id: 'random string',
        url: '',
        createdAt: '',
        title: 'Test',
        formQuestionsData: [
            {
                id: 1,
                type: 'text',
                question: 'q1',
                answer: '',
            },
            {
                id: 2,
                type: 'multiple_choice',
                question: 'q2',
                answer: '',
            }
        ]
    }

}

export const formsSlice = createSlice({
    name: 'forms',
    initialState: INITIAL_STATE,
    reducers: {
        createForm: (state, action) => {
            state.forms.push(action.payload)
        },
        addQuestion: (state, action) => {
            state.currentForm.formQuestionsData.push(action.payload)
        },
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount: (state, { payload }) => {
            state.value = state.value + payload
        },
        reset: () => INITIAL_STATE,
    },
    // extraReducers: {
    //     [incrementByAmountAsync.pending.type]: (state) => {
    //         state.loading = 'pending'
    //     },
    //     [incrementByAmountAsync.fulfilled.type]: (state, { payload }: PayloadAction<number>) => {
    //         state.loading = 'idle'
    //         state.value = state.value + payload
    //     },
    //     [incrementByAmountAsync.rejected.type]: (state, { payload }) => {
    //         state.loading = 'idle'
    //         state.error = payload
    //     },
    // },
})
export default formsSlice.reducer
export const { createForm, addQuestion, increment, decrement, incrementByAmount, reset } = formsSlice.actions