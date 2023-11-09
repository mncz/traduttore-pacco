import Form from 'react-bootstrap/Form'
import { translateText } from '../functions'

function renderOptions(props) {
    return (
        <option 
            key={ props.code }
            value={ props.code }
            data-value={ props.language }>
            { props.language }
        </option>
    )
}

function SelectLang({ id, select, langs }) {
    
    const handleChange = (event) => {
        const selectId = event.target.id === 'langSource' ? 'langTarget' : 'langSource'
        const opts = document.getElementById(selectId).options

        for (let i = 0; i < opts.length; i++) {
            if (opts[i].value === event.target.value) {
                opts[i].disabled = true
            } else {
                opts[i].disabled = false
            }
        }

        translateText()
    }

    return (
        <>
            <Form.Select 
                id={ id }
                defaultValue={ select }
                size='lg'
                onChange={ handleChange }>
                { langs.map(renderOptions) }
            </Form.Select>
        </>
    )
}

export default SelectLang