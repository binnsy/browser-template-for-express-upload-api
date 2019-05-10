'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#imageUpload').on('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    for (const [key, value] of formData.entries()) {
      console.log(key, value)
    }
    console.log(formData)
  })
})
