import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Row from 'react-bootstrap/Row'
import SelectLang from './Components/SelectLang'
import Tooltip from 'react-bootstrap/Tooltip'
import TopBar from './Components/TopBar'

function App() {
  return (
    <div className='App'>
      <TopBar />
      <header className='App-header'>
        <Container>
          <Row className='justify-content-center mb-3'>
            <Col xs='4' md='3' lg='2'>
              <SelectLang option={ 'Italiano' } />
            </Col>
            <Col xs='auto' className='align-self-center'>
              <OverlayTrigger
                placement='top'
                overlay={
                  <Tooltip>Inverti lingue</Tooltip>
                }
              >
                <span id='swap'>🔄</span>
              </OverlayTrigger>
            </Col>
            <Col xs='4' md='3' lg='2'>
              <SelectLang option={ 'Inglese' } />
            </Col>
          </Row>
          <Row className='g-3'>
            <Col xs='12' sm='6'>
              <Form.Control 
                as="textarea" 
                rows={3} 
                maxLength={50}
                placeholder='Testo da tradurre...' />
            </Col>
            <Col xs='12' sm='6'>
              <Form.Control 
                as="textarea"
                id='textarea-translated'
                rows={3}
                placeholder='Testo tradotto'
                readOnly />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
