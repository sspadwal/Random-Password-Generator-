function demo() {

    const text1 = document.getElementById('pass-container');
    const length = 12;
    const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const symbol = "!@#$%^&*()-_={}[]\|?/";

    let password = "";

    while (password.length < 12) {


        password += Upper[Math.floor(Math.random() * Upper.length)];
        password += Lower[Math.floor(Math.random() * Lower.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

    }
    text1.value = password;
}

function copyPassword() {

    let text1 = document.getElementById('pass-container');

    text1.select();
    document.execCommand("copy");

}