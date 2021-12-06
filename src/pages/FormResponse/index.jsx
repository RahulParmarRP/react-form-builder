import React, { useEffect } from 'react'
import forms from '../../__mock__/forms.json'
import { Button, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// const renderAnswerType = () => {
//     const AnswerComponent = switch (type) {
//         case value:

//             break

//         default:
//             break
//     }
//     return (AnswerComponent)
// }
export const FormResponse = () => {
    const { id } = useParams()
    const forms = useSelector(state => state.forms.forms)
    const form = forms.find(form => form.slug === id)
    const dispatch = useDispatch()
    debugger
    // useEffect(() => {
    //     dispatch()
    // }, [id])
    return (
        <div>
            {form
                ?
                (
                    <>
                        <h1>Form Response</h1>
                        <h5>{form.title}</h5>
                        {/* <TextField id="outlined-basic" label="Form Title" variant="outlined" /> */}
                        {form.formQuestionsData.map((question, index) => {
                            return (
                                <div>
                                    <b>Q{index}</b>
                                    <h4>{question.question}</h4>
                                    <TextField id="outlined-basic" label={question.question} variant="outlined" />
                                    <Typography variant="h5" component="div">
                                        {question.question}
                                    </Typography>
                                </div>
                            )
                        })}
                    </>
                )
                : "No forms found"
            }
        </div>
    )
}

export default FormResponse