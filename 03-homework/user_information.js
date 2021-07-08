function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function refreshPage(saniye) {
    var t;
    t = parseInt(Math.floor(saniye * 1000)); // Saniyeyi milisaniyeye dönüştürdüm
    setInterval('location.reload(false)', t); // setInterval bir fonksiyonu t milisaniye arayla sürekli olarak çalıştırmak için kullanılıyor
}
refreshPage(120);

window.onload = function () {
    var fiveMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

const accounts = [
    {
        iban: 'trxx yyyy xxxx yyyy',
        balance: 100,
    },
    {
        iban: 'trxx yyyy xxxx yyyx',
        balance: 5040,
    },
    {
        iban: 'trxx yyyy xxxx xyyx',
        balance: 10594,
    }
];

const otherAccounts = [
    {
        name: 'Alıcı Hesap1',
        iban: 'trxx yyyy xxxx yyyy'
    },
    {
        name: 'Alıcı Hesap2',
        iban: 'trxx yyyy xxxx yyyx'

    },
    {
        name: 'Alıcı Hesap3',
        iban: 'trxx yyyy xxxx xyyx',
    }
];

// export const user = {
//     name: 'Jane',
//     surname: 'Doe',
//     accounts
// };

let hesap1 = document.querySelector("#hsp1");
const firstAccount = parseFloat(accounts[0].balance)
hesap1.innerHTML = `Hesap1 Bakiyeniz: ${firstAccount}`;

let hesap2 = document.querySelector("#hsp2");
const secondAccount = parseFloat(accounts[1].balance)
hesap2.innerHTML = `Hesap2 Bakiyeniz: ${secondAccount}`

let hesap3 = document.querySelector("#hsp3");
const thirdAccount = parseFloat(accounts[2].balance)
hesap3.innerHTML = `Hesap3 Bakiyeniz: ${thirdAccount}`

let alicihesap1 = document.querySelector("#alicihsp1");
const otherAccount1 = `${otherAccounts[0].name}, ${otherAccounts[0].iban}`
alicihesap1.innerHTML = `${otherAccount1}`;

let alicihesap2 = document.querySelector("#alicihsp2");
const otherAccount2 = `${otherAccounts[1].name}, ${otherAccounts[1].iban}`
alicihesap2.innerHTML = `${otherAccount2}`;

let alicihesap3 = document.querySelector("#alicihsp3");
const otherAccount3 = `${otherAccounts[2].name}, ${otherAccounts[2].iban}`
alicihesap3.innerHTML = `${otherAccount3}`;

/*
Selected kısmında fonksiyon kullanmak gerekirse buraya geri dön.
 function selectedAccount() {}
 */

let selectedAcc = document.querySelector("#bankAcc");
let selectedOtherAcc = document.querySelector("#otherBankAcc")


let balance = document.querySelector("#tutar");
let button = document.querySelector("#buton")



let limit = firstAccount
const changeAcc = () => {
    let x = selectedAcc.value;
    if (x == 1) {
        limit = firstAccount
    } else if (x == 2) {
        limit = secondAccount
    } else if (x == 3) {
        limit = thirdAccount
    }
}

const changeOtherBankAcc = () => {
    let y = selectedOtherAcc.value;
    alert(`${y} alıcısını seçtiniz`)
}

function limiter(input) {
    console.log(limit);
    if (input.value < 0) input.value = 0;
    if (input.value > limit) {
        input.value = 0;
        alert("Bakiye yetersiz")
    } if (input.value > 500) {
        let password = prompt("Tutar 500 TL'den büyük. Şifre Giriniz");
        if (password == "1234") {
            alert("İşlem Başarılı")
        } else {
            alert("Şifre Hatalı, İşlem Başarısız")
        }
    }
}







