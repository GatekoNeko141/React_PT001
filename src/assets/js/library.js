// ELECTRON & REACT: https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/
// DIBUJAR EN CANVAS: https://www.w3schools.com/tags/canvas_drawimage.asp

export const typeInTextarea = (newText, el = document.activeElement) => { // Insertar texto en posicion de cursor en TextArea
    let start = el.selectionStart
    let end = el.selectionEnd
    let text = el.value
    let before = text.substring(0, start)
    let after  = text.substring(end, text.length)
    el.value = (before + newText + after)
    el.selectionStart = el.selectionEnd = start + newText.length
    el.focus()
  }
  
  export const deleteSpecialCharacters = text => { // Elimina Caracteres Especiales
    let allowedCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-_.@"
    let AllowChar = ""
    let char = ""
    let newText = ""
    for (let i = 0; i < text.length; i++) {
      AllowChar = text.charAt(i)
      for (let j = 0; j < allowedCharacters.length; j++) {
        char = allowedCharacters.charAt(j)
        if (AllowChar === char) {
          newText = newText + AllowChar
          break
        }
      }
    }
    return newText
  }
  
  export const ArrayDeleteItem = (arr, item) => { // Eliminar item de un array
    let i = arr.indexOf(item);
    if (i !== -1) { arr.splice(i, 1); }
  }
  
  export const formatDateText = date => { // Formato de fecha personalizado con texto
    let dateParsed = new Date(date)
    let monthNames = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre",
      "Octubre", "Noviembre", "Diciembre"
    ]
  
    return monthNames[dateParsed.getMonth()] + " " + dateParsed.getDate() + ", " + dateParsed.getFullYear()
  }
  
  export const formatDateSlash = date => { // Formato de fecha personalizado con barras
    let dateParsed = new Date(date)
    let mes = dateParsed.getMonth()
    return dateParsed.getDate() + "/" + (mes < 9 ? '0'+(mes+1) : (mes+1)) + "/" + dateParsed.getFullYear()
  }
  
  export const formatDateLine = date => { // Formato de fecha personalizado con barras
    let dateParsed = new Date(date)
    let mes = dateParsed.getMonth()
    return dateParsed.getDate() + "-" + (mes < 9 ? '0'+(mes+1) : (mes+1)) + "-" + dateParsed.getFullYear()
  }
  
  export const formatHour = date => { // Formato de Hora personalizado
    let dateParsed = new Date(date)
    let h = dateParsed.getHours()
    let m = dateParsed.getMinutes()
    let x = h >= 12 ? 'pm' : 'am'
    h = h % 12
    h = h ? h : 12
    m = m < 10 ? '0'+m: m
    let mytime= h + ':' + m + ' ' + x
    return (date !== null || date !== '' ? mytime : '')
  }
  
  export const secondsToString = seconds => { // Formato de reloj
    let hour = Math.floor(seconds / 3600)
    hour = (hour < 10) ? '0' + hour : hour
    let minute = Math.floor((seconds / 60) % 60)
    minute = (minute < 10) ? '0' + minute : minute
    let second = seconds % 60
    second = Math.round((second < 10) ? '0' + second : second)
    second = (second < 10) ? '0' + second : second
    return (hour === '00' ? '' : hour + ':') + minute + ':' + second
  }
  
  export const downloadAudio = (url, filename) => { // Descargar Archivo
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = filename// + '.ext'
      link.click()
    })
    .catch(console.error)
  }
  
  //export const now = moment().format('YYYY-MM-DD HH:mm:ss') // Momento Actual
  
  export const orderJsonAsc = obj => { // Ordenar json alfabeticamente ascendente
    let order = obj.slice().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    return order
  }
  
  export const integerAsc = json => { // Ordenar json numericamente ascendente
    let order = json.slice().sort((a, b) => b.id - a.id)
    return order
  }
  
  export const numberFormat = number => {
    return new Intl.NumberFormat("es-ES").format(number)
  }
  
  // export const exportXML = contentXML => { // Exportar XML
  //   let filename = data.listDetalle.name + '.xml'
  //   let element = document.createElement('a')
  //   element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(contentXML))
  //   element.setAttribute('download', filename)
  //   element.style.display = 'none'
  //   document.body.appendChild(element)
  //   element.click()
  //   document.body.removeChild(element)
  // }