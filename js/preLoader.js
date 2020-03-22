window.onload = function(){
    //$('#onload').fadeOut();
    let $body = document.querySelector('#body')
    let $loader = document.querySelector('#pre-loader')

    $body.classList.remove('hidden')
    $loader.classList.add('ocultarLoader')
    $loader.style.display = 'none'
}