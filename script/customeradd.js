const getName = document.getElementById('name-txt');
const getEmail = document.getElementById('email-txt');
const getPNumber = document.getElementById('PNumber-txt');
const getAdrress = document.getElementById('adress-txt');

const btnAddCustomer = document.getElementById('Add-customer');


let CustomerListArray = JSON.parse(localStorage.getItem('CustomerListArray')) || [];


function saveToLocalStorage() {
    localStorage.setItem('CustomerListArray', JSON.stringify(CustomerListArray));
}


btnAddCustomer.addEventListener('click', () => {
    const obj = {
        name: getName.value,
        address: getAdrress.value,
        phoneNumber: getPNumber.value,
        email: getEmail.value
    };

    CustomerListArray.push(obj);
    

    saveToLocalStorage();
    

    getName.value = '';
    getEmail.value = '';
    getPNumber.value = '';
    getAdrress.value = '';

    console.log(CustomerListArray);
});




function displaylocalstorageconsole() {
    CustomerListArray = JSON.parse(localStorage.getItem('CustomerListArray')) || [];
    window.addEventListener('load', console.log('Loaded from local storage:', CustomerListArray));
}



displaylocalstorageconsole();

