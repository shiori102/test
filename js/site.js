const btn = document.getElementById('buttonTest');

document.getElementById('formTest')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_sji7zus';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Sent!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    html: 'Something went wrong! I am also available at my <a href="//www.linkedin.com/in/shiori-matsuoka-2a2bab169/">LinkedIn.</a>',
                    icon: JSON.stringify(err),
                    confirmButtonText: 'OK'
                })
            });
    });