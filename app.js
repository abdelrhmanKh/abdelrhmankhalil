
const btn = document.getElementById('sendMessage');

document.getElementById('formProject')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        emailjs.sendForm("service_lftwgdg", "template_28hhmbm", this)
            .then(() => {
                btn.value = 'Send Message';

            }, (err) => {
                btn.value = 'Send Message';
                alert(JSON.stringify(err));
            });
    });
