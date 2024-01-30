const passWordBox = document.getElementById("pass");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]};:'\",<.>/?";


function generateRandomPassword() {

    let password = "";
    const length = 16;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passWordBox.value = password;
}
function copyPassword() {

    passWordBox.select();
    document.execCommand("copy")
}