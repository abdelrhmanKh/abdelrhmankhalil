
const btn = document.getElementById('sendMessage');

document.getElementById('formProject')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.innerText = 'Sending...';

        emailjs.send("service_lftwgdg", "template_28hhmbm", {
            from_name: document.getElementById('form_name').value,
            phone_number: document.getElementById('phone_number').value,
            price: document.getElementById('price').value,
            message: document.getElementById('Project').value,
            email: document.getElementById('email').value,
        })
            .then(() => {
                btn.innerText = 'Send Message';
            }, (err) => {
                btn.innerText = 'Send Message';
                alert(JSON.stringify(err));
            });
    });

