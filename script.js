document.querySelector('#tlines').addEventListener('click', function () {
    var elements = document.querySelector('#diss');
    if (elements.style.marginLeft === '20rem') {
        elements.style.marginLeft = '-300px'


    }
    else {
        elements.style.marginLeft = '20rem';

    }
});