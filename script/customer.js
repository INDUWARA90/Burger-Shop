
//=========getting local storage info ================

let CustomerListArray = JSON.parse(localStorage.getItem('CustomerListArray')) || [];

const Customerlist = document.querySelector('.js-customers-list');

let CusHtml = '';

CustomerListArray.forEach((customer, index) => {

    const phonenumber = customer.phoneNumber;
    const name = customer.name;
    const address = customer.address;
    const email = customer.email;
    
    CusHtml += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 ">
        <div class="card" style="width: 21rem;">
            <h2 style="text-align: center;margin-top: 10px;">C000${index + 1}</h2>
            <div class="card-body">
                <div class="card-text ">
                    <div class="name about-customer">
                        name: <input type="text" class="Name" value="${name}" disabled>
                    </div>
                    <div class="location about-customer">
                        Location: <input type="text" class="location" value="${address}" disabled>
                    </div>
                    <div class="email about-customer">
                        Email: <input type="text" class="email" value="${email}" disabled>
                    </div>
                    <div class="phonenumber about-customer">
                        Phone Number: <input type="text" class="PhoneNumber" value="${phonenumber}" disabled>
                    </div>
                </div>
                <div class="container-buttons">
                    <button class="Update-Button" data-index="${index}">Update</button>
                    <button class="Delete-Button" data-index="${index}">Delete</button>
                </div>
            </div>
        </div>
    </div>
    `;
});

Customerlist.innerHTML = CusHtml;

//=================UPdate method=========================
function Update(event) {
    const button = event.target;
    const card = button.closest('.card-body');
    const inputs = card.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.disabled === true) {
            input.disabled = false;
        } else {
            input.disabled = true;
        }

    });


    if (button.textContent === 'Update') {
        button.textContent = 'Save';
    } else {
        button.textContent = 'Update';
    }

}


function u(event) {
    const button=event.target;
    
}


//=================delete method=========================
function Delete(event) {
    const button = event.target;
    const index = button.getAttribute('data-index');

    
    CustomerListArray.splice(index, 1);
    localStorage.setItem('CustomerListArray', JSON.stringify(CustomerListArray));

    
    location.reload();
}


// Attach event listeners
document.querySelectorAll('.Update-Button').forEach(button => {
    button.addEventListener('click', Update);
});

document.querySelectorAll('.Delete-Button').forEach(button => {
    button.addEventListener('click', Delete);
});



