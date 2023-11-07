import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import SelectLang from './Components/SelectLang'
import TopBar from './Components/TopBar'
import langs from './assets/lingue.json'
import { useEffect } from 'react'

const disabledSelected = async () => {
  const source = document.getElementById('selectSource')
  const target = document.getElementById('selectTarget')

  for (let i = 0; i < source.options.length; i++) {
    let sourceOpt = source.options[i]
    let targetOpt = target.options[i]

    if (sourceOpt.value === target.value) {
      sourceOpt.disabled = true
    } else if (sourceOpt.disabled) {
      sourceOpt.disabled = false
    }

    if (targetOpt.value === source.value) {
      targetOpt.disabled = true
    } else if (targetOpt.disabled) {
      targetOpt.disabled = false
    }
  }
}

function App() {
  useEffect(() => {
    disabledSelected()
  }, [])

  return (
    <div className='App'>
      <TopBar />
      <header className='App-header'>
        <Container>
          <Row className='justify-content-center mb-3'>
            <Col xs='4' md='3' lg='2'>
              <SelectLang 
                id='selectSource'
                select={ 'it' }
                options={ langs.text } />
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
              <SelectLang
                id='selectTarget'
                select={ 'en' }
                options={ langs.text } />
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
