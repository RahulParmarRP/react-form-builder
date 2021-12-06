import React from 'react'
import FormCard from '../../components/FormCard'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
export const FormsList = () => {
    const forms = useSelector(state => state.forms.forms)
    debugger
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {forms.map((form, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <FormCard key={form.id} form={form} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default FormsList