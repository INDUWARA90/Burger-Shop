
const nameElement = document.querySelector('.name');
const loginBtn = document.querySelector('.Login-btn');
const signBtn = document.querySelector('.Sign-Up-btn');
const Forgot = document.querySelector('.Forgot');
const createAccountBtn = document.querySelector('.Create-account');
const title = document.querySelector('.title');
const name = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');

//============Arrys of Users==============

let Users = [
    {
        name: '',
        email: 'kamal@gmail.com',
        password: '1234',
    },
    {
        name: '',
        email: 'nimal@gmail.com',
        password: '1234',
    },
];



//==================Login up ===============================
loginBtn.addEventListener('click', () => {

    title.innerHTML = 'Login';
    nameElement.style.display = 'none';
    Forgot.style.display = 'block';
    createAccountBtn.style.display = 'none';
    signBtn.style.display='block';

    const Password = password.value;
    const Email = email.value;

    if (password.value !=``&& email.value !=``) {

    
        Users.forEach((user) => {
            if (user.email === Email && user.password===Password) {
                console.log(Password);
                console.log(Email);
                window.location.href='Homepage.html';
            }
        })
        
    }else{
        return;
    }

    password.value = '';
    email.value = '';
});

//==================Sign up ===============================
signBtn.addEventListener('click', () => {
    title.innerHTML = 'Sign Up';
    nameElement.style.display = 'block';
    Forgot.style.display = 'none';
    createAccountBtn.style.display = 'block';
    signBtn.style.display='none';
});
//==================Create Account ========================
createAccountBtn.addEventListener('click', () => {


    if (name.value != '' && password.value != '' && email.value != '') {
        alert('Account Created Login Agian');
    } else {
        alert('please Enter Information to process Account');
        return;
    }
    name.value = '';
    password.value = '';
    email.value = '';

});



// function setLocalStorage() {
//     localStorage.setItem('UserArray',JSON.stringify(Users));
// }
// function getLocalStorage() {
//    return JSON.parse(localStorage.getItem('UserArray'));
// }