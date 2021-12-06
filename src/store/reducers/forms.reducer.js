import forms from '../../__mock__/forms.json'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateId } from '../../utils'
const INITIAL_STATE = {
    todos: [],

    forms: [...forms],
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
                answer: 'text answer',
            },
            {
                id: 2,
                type: 'multiple_choice',
                question: 'q2',
                answer: [
                    {
                        id: 1,
                        option: "Football",
                        checked: false
                    },
                    {
                        id: 2,
                        option: "Basketball",
                        checked: false
                    },
                    {
                        id: 3,
                        option: "Swimming",
                        checked: false
                    }
                ],
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
        // getFormById: (state, action) => {
        // },
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