import * as React from 'react'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { QUESTION_TYPES } from '../../constants'

export const MultiChoiceCheckBoxGroup = ({ question }) => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    })
    const [localState, setLocalState] = React.useState(question)
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        })
    }

    const { gilad, jason, antoine } = state
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ mt: 0 }} component="fieldset" variant="standard">
                {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                <FormGroup>
                    {question.answer.map((option, index) => {
                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox checked={option.checked} onChange={handleChange}
                                        name={option.option} />
                                }
                                label={option.option}
                            />
                        )
                    })}

                    <FormControlLabel
                        control={
                            <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
        </Box>
    )
}
export default MultiChoiceCheckBoxGroup