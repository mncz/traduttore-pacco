import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import SelectLang from './Components/SelectLang'
import TopBar from './Components/TopBar'
import langs from './assets/lingue.json'
import { useEffect } from 'react'

const onceRender = async () => {
  const source = document.getElementById('selectSource')
  const target = document.getElementById('selectTarget')
}

function App() {
  useEffect(() => {
    onceRender()
  }, [])

  return (
    <div className='App'>
      <TopBar />
      <header className='App-header'>
        <Container>
          <Row className='justify-content-center mb-3'>
            <Col xs='4' md='3' lg='2'>
              <SelectLang id='selectSource' select={ 'it' } options={ langs.text } />
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
              <SelectLang id='selectTarget' select={ 'en' } options={ langs.text } />
            </Col>
          </Row>
          <Row className='g-3'>
            <Col xs='12' sm='6'>
              <Form.Control 
                as="textarea" 
                rows={ 3 } 
                maxLength={ 50 }
                placeholder='Testo da tradurre...' />
            </Col>
            <Col xs='12' sm='6'>
              <Form.Control 
                as="textarea"
                id='textarea-translated'
                rows={ 3 }
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
