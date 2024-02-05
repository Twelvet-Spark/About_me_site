const my_email = "kair.arslan@gmail.com";
let is_free = true;
let showing_mail_addr = false;
let intervalID;
let letter = 1;

function delete_letter() {
    is_free = false;
    document.querySelector('.email').innerHTML = document.querySelector('.email').innerHTML.substring(0, document.querySelector('.email').innerHTML.length - 1);
    if (!document.querySelector('.email').innerHTML) {
        clearInterval(intervalID);
        intervalID = setInterval(show_email, 25);
    }
}

function show_email() {
    if (!showing_mail_addr) {
        document.querySelector('.email').innerHTML = my_email.substring(0, letter);
        letter++;
        if (document.querySelector('.email').innerHTML === my_email) {
            clearInterval(intervalID);
            showing_mail_addr = true;
            is_free = true;
        }
    }
    else if (showing_mail_addr) {
        document.querySelector('.email').innerHTML = "Email".substring(0, letter);
        letter++;
        if (document.querySelector('.email').innerHTML === "Email") {
            clearInterval(intervalID);
            showing_mail_addr = false;
            is_free = true;
        }
    }
}

function email() {
    if (is_free) {
        letter = 1;
        intervalID = setInterval(delete_letter, 25);
    }
}

document.querySelector('.email').addEventListener('click', email);