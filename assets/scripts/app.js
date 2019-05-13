'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const config = require('./config')

$(() => {
  // your JS code goes here
  $('#imageUpload').on('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value)
    $.ajax({
      url: config.apiUrl + '/uploads',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST'
    })
      .then(data => {
        console.log(data.upload.url)
        $('#image-display').append(`<img src=${data.upload.url} />`)
      })
      .catch(console.log)
  })
})
