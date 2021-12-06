import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useHistory } from 'react-router-dom'
export const FormCard = ({ form }) => {
    const history = useHistory()
    const handleGoToFormClick = () => history.push(`/forms/${form.slug}`)
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography> */}
                <Typography variant="h5" component="div">
                    {form.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {form.createdAt}
                </Typography>
                <Typography variant="body2" noWrap={false}>
                    {window.origin}/forms/{form.slug}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleGoToFormClick()}
                    variant="contained" size="small">Go To Form</Button>
            </CardActions>
        </Card >
    )
}
export default FormCard