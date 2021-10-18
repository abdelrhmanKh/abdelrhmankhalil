
const btn = document.getElementById('sendMessage');
var formText = {
    from_name: document.getElementById('form_name').value,
    phone_number: document.getElementById('phone_number').value,
    price: document.getElementById('price').value,
    message: document.getElementById('message').value,
    email: document.getElementById('email').value,
};
document.getElementById('formProject')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerText = 'Sending...';

        emailjs.sendForm("service_lftwgdg", "template_28hhmbm", formText)
            .then(() => {
                btn.innerText = 'Send Message';

            }, (err) => {
                btn.innerText = 'Send Message';
                alert(JSON.stringify(err));
            });
    });
