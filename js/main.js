const form = document.querySelector('.form');
const formServices = document.querySelector('.form-service');

function onSubmit(e) {
    e.preventDefault()

    const news = document.getElementById('email-news').value;

    if (news === '') {
        alert('Please enter your email to subscribe to our news letter')
    } else {
        form.textContent = 'Thank you.'
    }
}

function sendMsg(e) {
    e.preventDefault()

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    if (name === '' || email === '' || msg === '') {
        alert('Please fill the fields')
    } else {
        formServices.textContent = 'Message was sent. Thank you'
    }
}

form.addEventListener('submit', onSubmit);
formServices.addEventListener('submit', sendMsg)