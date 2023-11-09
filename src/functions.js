const URL = 'https://translation.googleapis.com/language/translate/v2?key='
let TIMEOUT_ID = undefined

const getForm = (a) => {
  return [document.getElementById(a[0]), document.getElementById(a[1])]
}

function decodeHtml(html) {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const disableOptions = () => {
  const [a, b] = getForm(['langSource', 'langTarget'])
  
  for (let i = 0; i < a.options.length; i++) {
    let aop = a.options[i]
    let bop = b.options[i]
    aop.disabled = (aop.value === b.value) ? true : false
    bop.disabled = (bop.value === a.value) ? true : false
  }
}
  
const swapLangs = () => {
  const [a, b] = getForm(['langSource', 'langTarget'])
  let t = a.value
  a.value = b.value
  b.value = t
  disableOptions()
  translateText()
}

const translateText = async () => {
  const [a, b] = getForm(['textareaSource', 'textareaTarget'])
  const [al, bl] = getForm(['langSource', 'langTarget'])
  let req = false

  if (a.value === '') {
    b.placeholder = 'Testo tradotto'
    return
  }

  b.placeholder = 'Traduzione in corso...'

  if (typeof TIMEOUT_ID !== 'undefined') {
    clearTimeout(TIMEOUT_ID)
    TIMEOUT_ID = undefined
  }

  await new Promise(resolve => {
    TIMEOUT_ID = setTimeout(resolve, 2000)
    req = true
  })

  if (req && a.value !== '') {
    const response = await fetch(
      `${URL}${process.env.REACT_APP_API_KEY}&source=${al.value}&target=${bl.value}&q=${a.value}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )

    const obj = await response.json()
    b.placeholder = decodeHtml(obj.data.translations[0].translatedText)
  }
}

export { disableOptions, swapLangs, translateText }