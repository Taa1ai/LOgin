let passfiled = document.getElementById('pass_word')
function generate() {
    let strings = '';
    let password;
    for (let n = 0; n < strings.length; n++) {
        let randomNum = Math.floor(Math.random() * strings.length);
        password += strings.substr(randomNum, randomNum + 1)
        let finalpass = password.substr(0,document.getElementById('pres').input.value);
        passfiled.value = finalpass
    }
}

