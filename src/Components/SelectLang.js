import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function renderOptions(props) {
    return (
        <option 
            key={ props.code }
            value={ props.code }>
            { props.language }
        </option>
    )
}

function SelectLang({ id, select, options }) {
    const [selected, setSelected] = useState(options[0].code)

    const handleChange = (event) => {
        const selectId = event.target.id === 'selectSource' ? 'selectTarget' : 'selectSource'
        const opts = document.getElementById(selectId).options
        opts.value = selected
        setSelected(event.target.value)

        for (let i = 0; i < opts.length; i++) {
            if (opts[i].value === event.target.value) {
                opts[i].disabled = true
            } else {
                opts[i].disabled = false
            }
        }
    }

    return (
        <>
            <Form.Select id={ id } onChange={ handleChange } defaultValue={select} size='lg'>
                {options.map(renderOptions)}
            </Form.Select>
        </>
    )
}

export default SelectLang