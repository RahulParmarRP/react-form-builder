import * as React from 'react'
import TextField from '@mui/material/TextField'
import MultiChoiceCheckBoxGroup from '../MultiChoiceCheckBoxGroup'
import { EDITOR_MODE, QUESTION_TYPES } from '../../constants'


export const renderAnswerType = (question, mode) => {
    debugger
    const questionType = question.type
    switch (mode) {
        case EDITOR_MODE.EDIT:
            switch (questionType) {
                // case QUESTION_TYPES.TEXT:
                //     return <TextField id="outlined-basic" label="Answer" variant="outlined" />
                case QUESTION_TYPES.MULTIPLE_CHOICE:
                    return (
                        <>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                rows={2} />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                rows={2} />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                rows={2} />
                        </>
                    )
                default: break
            }
            break

        case EDITOR_MODE.VIEW:
            switch (questionType) {
                case QUESTION_TYPES.TEXT:
                    return <TextField id="outlined-basic" label="Answer" variant="outlined" />
                case QUESTION_TYPES.MULTIPLE_CHOICE:
                    return (
                        <MultiChoiceCheckBoxGroup question={question} />
                    )
                default: break
            }
            break

        default: break
    }
}
export default renderAnswerType