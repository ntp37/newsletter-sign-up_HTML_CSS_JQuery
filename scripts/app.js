const button = $('#email-submit')
const inputTextBox = $('input')
const form = $('form')
const inputLabel = $('.input-label')
const titieText = $('.title-text')

form.on('submit', (e) => {
    e.preventDefault()
    let emailSubmit = inputTextBox.val()

    titieText.children().first().text('Thanks for subscribing!')
    titieText.children().last().remove()
    titieText.addClass('sucess')
    titieText.append(`<p>A confirmation email has been sent to <strong>${emailSubmit}</strong>. 
    Please open it and click the button inside to confirm your subscription.</p>`)

    $('.main-box').addClass('sucess')
    $('.main-box').append('<button onclick=window.location.reload()>Dismiss message</button>')

    $('main').css('max-width', '500px')
    $('.list-text').remove()
    $('.email-input').remove()
    $('.image-box').remove()
    $('.details-box').addClass('sucess')
    $('.sucess').removeAttr('hidden')
})

inputTextBox.on('invalid', (e) => {
    e.preventDefault();
    if(inputLabel.children().length === 1) {
        inputLabel.append('<p>Valid email required</p>');
        inputLabel.children().last().css('color', '#f74d4d')
    }
    
    inputTextBox.css('border', '1px solid #f74d4d')
    inputTextBox.css('background-color', '#ffe1e1')
    inputTextBox.css('color', '#f74d4d')
})