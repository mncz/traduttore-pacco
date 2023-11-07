import Form from 'react-bootstrap/Form'

function renderOptions(props, select) {
    var selected = true ? select === props.code : false

    return (
        <option 
            key={ props.code }
            value={ props.code }
            selected={ selected }>
            { props.language }
        </option>
    )
}

function SelectLang({ id, select, options }) {
    return (
        <>
            <Form.Select id={ id } size='lg'>
                {options.map((option) => renderOptions(option, select))}
            </Form.Select>
        </>
    )
}

export default SelectLang 