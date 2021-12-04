import { Button, TextField } from '@mui/material'
import React from 'react'
import AddQuestionModal from '../../components/AddQuestionModal'
import Grid from '@mui/material/Grid'
import { renderAnswerType } from '../../components/AddQuestionModal'
const Dashboard = () => {
    const mode = "VIEW"
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
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField fullWidth id="outlined-basic" label="Form Title" variant="outlined" />
                {form.formQuestionsData.map((question, index) => {
                    return (
                        <div>
                            <h4>{question.question}</h4>
                            <div>
                                {renderAnswerType(question.type, mode)}
                            </div>
                        </div>
                    )
                })}
            </Grid>
            <Grid item xs={4}>
                <AddQuestionModal />
                <Button variant="contained">Save Form</Button>
            </Grid>
        </Grid>
    )
}

export default Dashboard