import Form from 'react-bootstrap/Form'

function SelectLang({ option }) {
    return (
        <>
            <Form.Select size='lg'>
                <option>{ option }</option>
            </Form.Select>
        </>
    )
}

export default SelectLang 