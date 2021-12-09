import { Button, TextField } from '@mui/material'
import React from 'react'
import AddQuestionModal from '../../components/AddQuestionModal'
import Grid from '@mui/material/Grid'
import { useHistory } from 'react-router-dom'
import FormView from '../../components/FormView'
const Dashboard = () => {
    const history = useHistory()

    const handleSaveFormClick = () => {
        history.push('/forms')
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <FormView />
            </Grid>
            <Grid item xs={4}>
                <AddQuestionModal />
                <Button variant="contained" onClick={() => handleSaveFormClick()}>Save Form</Button>
            </Grid>
        </Grid>
    )
}

export default Dashboard