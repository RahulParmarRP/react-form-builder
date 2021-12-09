import React from 'react'
import { Button, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { EDITOR_MODE, QUESTION_TYPES } from '../../constants'
import renderAnswerType from '../AddQuestionModal/renderAnswerType'
export const FormView = () => {
    const currentForm = useSelector(state => state.forms.currentForm)
    const mode = EDITOR_MODE.VIEW
    const [form, setForm] = React.useState({
        formQuestionsData: [
            {
                id: 1,
                type: 'text',
                question: 'testsetse',
                answer: '',
            },
            {
                id: 2,
                type: 'multiple_choice',
                question: 'testsetse',
                answer: '',
            }
        ]
    })
    return (
        <div>
            <TextField fullWidth id="outlined-basic" label="Form Title" variant="outlined" />
            {currentForm.formQuestionsData.map((question, index) => {
                return (
                    <div>
                        <h4>Q{index + 1}. {question.question}</h4>
                        {renderAnswerType(question, mode)}
                    </div>
                )
            })}
        </div>
    )
}

export default FormView