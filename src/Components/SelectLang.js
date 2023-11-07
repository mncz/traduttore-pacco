import Form from 'react-bootstrap/Form'

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
    return (
        <>
            <Form.Select id={ id } defaultValue={select} size='lg'>
                {options.map(renderOptions)}
            </Form.Select>
        </>
    )
}

export default SelectLang 