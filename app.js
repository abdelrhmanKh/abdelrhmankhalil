const form_name = document.getElementById('name').value
const phone_number = document.getElementById('tel').value
const price = document.getElementById('budget').value
const message = document.getElementById('project').value
const email = document.getElementById('email').value

function sendEmail(e) {
    e.preventDefault();
    emailjs.send("service_lftwgdg", "template_28hhmbm", {
        from_name: form_name,
        phone_number: phone_number,
        price: price,
        message: message,
        email: email,
    });
}
