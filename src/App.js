import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { useEffect } from 'react'
import SelectLang from './Components/SelectLang'
import TopBar from './Components/TopBar'
import langs from './assets/lingue.json'
import * as fn from './functions'

function App() {
  useEffect(() => {
    fn.disableOptions()
  }, [])

  return (
    <div className='App'>
      <TopBar />
      <header className='App-header'>
        <Container>
          <Row className='justify-content-center mb-3'>
            <Col xs='4' md='3' lg='2'>
              <SelectLang 
                id={ 'langSource' }
                select={ 'it' }
                langs={ langs.text } />
            </Col>
            <Col xs='auto' className='align-self-center'>
              <OverlayTrigger
                placement='top'
                overlay={ <Tooltip>Inverti lingue</Tooltip> }>
                <span id='swap' onClick={ fn.swapLangs }>🔄</span>
              </OverlayTrigger>
            </Col>
            <Col xs='4' md='3' lg='2'>
              <SelectLang
                id={ 'langTarget' }
                select={ 'en' }
                langs={ langs.text } />
            </Col>
          </Row>
          <Row className='g-3'>
            <Col xs='12' sm='6'>
              <Form.Control 
                as='textarea'
                id='textareaSource'
                rows={ 3 } 
                maxLength={ 100 }
                onKeyUp={ fn.translateText }
                placeholder='Testo da tradurre...' />
            </Col>
            <Col xs='12' sm='6'>
              <Form.Control 
                as='textarea'
                id='textareaTarget'
                rows={ 3 }
                placeholder='Testo tradotto'
                readOnly />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
