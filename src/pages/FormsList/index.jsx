import React from 'react'
import FormCard from '../../components/FormCard'
import { useSelector } from 'react-redux'
export const FormsList = () => {
    const forms = useSelector(state => state.forms.forms)
    return (
        <div>
            {forms.map(form => () => <FormCard key={form.id} form={form} />)}
            <FormCard />
        </div>
    )
}

export default FormsList