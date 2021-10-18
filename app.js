
const btn = document.getElementById('sendMessage');

document.getElementById('formProject')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerText = 'Sending...';

        emailjs.sendForm("service_lftwgdg", "template_28hhmbm", this)
            .then(() => {
                btn.innerText = 'Send Message';

            }, (err) => {
                btn.innerText = 'Send Message';
                alert(JSON.stringify(err));
            });
    });
