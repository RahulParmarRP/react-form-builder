import React from 'react'
import forms from '../../data/forms'
import { Button, TextField } from '@mui/material'
const renderAnswerType = () => {
    const AnswerComponent = switch (type) {
        case value:
            
            break;
    
        default:
            break;
    }
return (AnswerComponent)
}
const FormResponse = () => {
    return (
        <div>
            <h1>Form Response</h1>
            <h5>{forms[0].title}</h5>
            <TextField id="outlined-basic" label="Form Title" variant="outlined" />
            {forms[0].formQuestionData.map((question) => {
                return (
                    <div>
                        <TextField id="outlined-basic" label={question.question} variant="outlined" />
                        <Typography variant="h5" component="div">
                            {question.question}
                        </Typography>
                    </div>
                )
            }
                
            })}
        </div>
    )
}

export default FormResponse