import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import CheckboxesGroup from '../CheckBoxGroup'
const currencies = [
    {
        label: 'Text',
        value: 'text',
    },
    {
        label: 'Multi Choice Checkbox',
        value: 'multiChoice',
    },
    {
        label: 'Single Select radio',
        value: 'singleRadio',
    },
    {
        value: 'JPY',
        label: '¥',
    },
]


export const ScrollDialog = () => {
    const [open, setOpen] = React.useState(false)
    const [scroll, setScroll] = React.useState('paper')
    const [currency, setCurrency] = React.useState('EUR')

    const handleClickOpen = (scrollType) => () => {
        setOpen(true)
        setScroll(scrollType)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event) => {
        setCurrency(event.target.value)
    }
    const descriptionElementRef = React.useRef(null)
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef
            if (descriptionElement !== null) {
                descriptionElement.focus()
            }
        }
    }, [open])
    const renderAnswerType = (componentType) => {
        debugger
        switch (componentType) {

            case "text": return <TextField id="outlined-basic" label="Answer" variant="outlined" />
            case "multiChoice": return <CheckboxesGroup />
            default: return <h1>No project match</h1>
        }
    }
    return (
        <div>
            <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
            <Button onClick={handleClickOpen('body')}>scroll=body</Button>
            <Dialog
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <TextField id="outlined-basic" fullWidth label="Question" variant="outlined" />

                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Answer Type"
                            value={currency}
                            onChange={handleChange}
                            fullWidth
                            helperText="Please select your currency"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {renderAnswerType(currency)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Add Question</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default ScrollDialog