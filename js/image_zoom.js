function ClickImage() { // Escala da Imagem e aparição do "x"
    let img = document.querySelector('img.images')
    let mark = document.getElementById('x-mark')

    img.style.scale = '1.09'
    mark.style.display = 'block'
}

function OutClickImage() { // forma normal da imagem quando clicar no "x"
    let img = document.querySelector('img.images')
    let mark = document.getElementById('x-mark')

    img.style.scale = '1.0'
    mark.style.display = 'none'
}

function ClickImage2() { // Escala da Imagem e aparição do "x"
    let img2 = document.querySelector('img#version-2-0')
    let mark2 = document.getElementById('x-mark2')

    img2.style.scale = '1.09'
    mark2.style.display = 'block'
}

function OutClickImage2() { // forma normal da imagem quando clicar no "x"
    let img2 = document.querySelector('img#version-2-0')
    let mark2 = document.getElementById('x-mark2')

    img2.style.scale = '1.0'
    mark2.style.display = 'none'
}

function ClickImage3() { // Escala da Imagem e aparição do "x"
    let img3 = document.querySelector('img#version-3-0-img')
    let mark3 = document.getElementById('x-mark3')

    img3.style.scale = '1.09'
    mark3.style.display = 'block'
}

function OutClickImage3() { // forma normal da imagem quando clicar no "x"
    let img3 = document.querySelector('img#version-3-0-img')
    let mark3 = document.getElementById('x-mark3')

    img3.style.scale = '1.0'
    mark3.style.display = 'none'
}