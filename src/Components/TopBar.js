import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function TopBar() {
    return (
        <Navbar className='fixed-top bg-body-tertiary border-bottom border-primary'>
        <Container>
            <Navbar.Brand href='#'>
                <span id='brand' className='me-2 lh-1'>🗣</span>
                Traduttore Pacco
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>Creato da mncz</Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default TopBar