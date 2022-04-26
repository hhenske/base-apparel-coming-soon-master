
// const btn = document.querySelector('button');
// const form = document.getElementById('mail');
// const mail = document.getElementById('email');
// const list = document.getElementById('list');
// const errMsg = document.querySelector('#errMsg');

// const newMsg = () => {
//     const img = document.createElement('img');
//     img.crc = 'images/icon-error.svg'
//     let msg = 'Please Enter a valid email';
//     errMsg.append(img);
//     errMsg.append(msg);
//     list.append(errMsg);
// }

// const mailValidation = () => {
//     let email = mail.value;
//     if (email > 7 && email.contains('@') && email.contains('.')) {
//         console.log("valid email")
//     } else {
//         newMsg();
//     }
// }

// const baseApparel = (e) => {
//     e.preventDefault();
//     mailValidation();
//     btn.removeEventListener('click', baseApparel);
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// })

// mail.addEventListener('click', () => {
//     errMsg.innerHTML = '';
//     btn.addEventListener('click', baseApparel);
// })

// btn.addEventListener('click', baseApparel);

const btn = document.querySelector('button');

const form = document.querySelector('form');

const mail = document.querySelector('input');

const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const list = document.querySelector('#list')

const errMsg = document.querySelector('#errMsg')


const newMsg = () => {
    const img = document.createElement('img');
    img.src = 'images/icon-error.svg'
    let msg = 'Please Enter a valid email';
    errMsg.append(img);
    errMsg.append(msg);
    list.append(errMsg);
}

const mailValidation = () => {
    if (mail.value.match(regx)){
        alert('you have entered a valid email')
    }
    else {
        newMsg();
    }
}

const myFunction = (e)=> {
    e.preventDefault();
    mailValidation();
    btn.removeEventListener('click', myFunction);
   }

form.addEventListener('submit', (e)=> {
    e.preventDefault();
})

mail.addEventListener('click', () => {
    errMsg.innerHTML = '';
    btn.addEventListener('click', myFunction);
})

btn.addEventListener('click', myFunction);