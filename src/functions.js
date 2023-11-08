const getForm = (a) => {
    return [document.getElementById(a[0]), document.getElementById(a[1])]
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
}
  
const translateText = () => {
    const [a, b] = getForm(['textareaSource', 'textareaTarget'])
    const placeholder = 'Testo tradotto'
    const loadingText = 'Traduzione in corso...'
  
    if (a.value === '') {
      b.placeholder = placeholder
    } else {
      b.placeholder = loadingText
    }
  
    if (a.value === 'ciao') {
      setTimeout(() => {
        b.placeholder = 'Hello'
      }, 2000)
    } else if (a.value === 'forte') {
      setTimeout(() => {
        b.placeholder = 'Richard'
      }, 2000)
    } else if (a.value === 'pollo') {
      setTimeout(() => {
        b.placeholder = 'Saira'
      }, 2000)
    }
}

export { disableOptions, swapLangs, translateText }