window.addEventListener('GreeterReady', () => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let login = document.getElementById('login');

    username.value = 'louarn';

    login.addEventListener('click', async () => {
        lightdm.authenticate(username.value);
        setTimeout(() => {
            if (!lightdm.respond(password.value)) {
                login.style.animation = 'error 500ms linear';
                password.value = '';

                setTimeout(() => {
                    login.style.animation = 'none';
                }, 500);
            }
        }, 110);
    });
});