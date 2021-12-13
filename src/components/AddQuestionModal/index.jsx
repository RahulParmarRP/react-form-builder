import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { EDITOR_MODE, QUESTION_TYPES } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { renderAnswerType } from './renderAnswerType'
const questionTypes = [
    {
        label: 'Text',
        value: QUESTION_TYPES.TEXT,
    },
    {
        label: 'Multi Choice Checkbox',
        value: QUESTION_TYPES.MULTIPLE_CHOICE,
    },
    {
        label: 'Single Select radio',
        value: 'singleRadio',
    },
]

export const AddQuestionModal = () => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = React.useState(false)
    const [scroll, setScroll] = React.useState('paper')
    const [selectedQuestionType, setSelectedQuestionType] = React.useState(QUESTION_TYPES.TEXT)
    const mode = EDITOR_MODE.EDIT
    const handleClickOpen = (scrollType) => () => {
        setOpenModal(true)
        setScroll(scrollType)
    }
    const handleAddQuestionClick = () => {
        const addQuestion = {
            question: '',
            type: selectedQuestionType,
        }
        dispatch(addQuestion(selectedQuestionType))
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleChange = (event) => {
        setSelectedQuestionType(event.target.value)
    }
    const descriptionElementRef = React.useRef(null)
    React.useEffect(() => {
        if (openModal) {
            const { current: descriptionElement } = descriptionElementRef
            if (descriptionElement !== null) {
                descriptionElement.focus()
            }
        }
    }, [openModal])

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen('paper')}>Add Question</Button>
            <Dialog
                maxWidth={'md'}
                open={openModal}
                onClose={handleCloseModal}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Question</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <TextField id="outlined-basic"
                            required
                            fullWidth label="Question" variant="outlined" />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Answer Type"
                            value={selectedQuestionType}
                            onChange={handleChange}
                            fullWidth
                            helperText="Please select type of question"
                        >
                            {questionTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {renderAnswerType({ type: selectedQuestionType }, mode)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleAddQuestionClick}>Add Question</Button>
                    <Button variant="contained" onClick={handleCloseModal}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddQuestionModal