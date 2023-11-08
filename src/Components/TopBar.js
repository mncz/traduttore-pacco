import { Container, Navbar } from 'react-bootstrap'
import { ReactComponent as GithubLogo } from '../assets/github.svg'

function TopBar() {
    return (
        <Navbar className='fixed-top bg-body-tertiary border-bottom border-primary border-5'>
            <Container>
                <Navbar.Brand href='/'>
                    <span id='brand' className='me-2 lh-1'>🗣</span>
                    Traduttore Pacco
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        <a href='https://github.com/mncz' className='text-muted text-decoration-none'>
                            mncz
                            <GithubLogo className='ms-1' fill='currentColor' width={ 16 }/>
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar