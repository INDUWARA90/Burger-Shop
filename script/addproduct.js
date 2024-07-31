
const getPName=document.getElementById('ProductName');
const getPPrice=document.getElementById('ProductPrice');
const getPImage=document.getElementById('Productimage/path');
const getPIngredients=document.getElementById('ProductIngredients');
const getProductDiscount=document.getElementById('ProductDiscount');

const addproductBtn=document.querySelector('.Add-product-btn');


let productListArray=JSON.parse( localStorage.getItem('ProductList'))||[];


function setLocalstorage() {
   localStorage.setItem('ProductList',JSON.stringify(productListArray));     
}



addproductBtn.addEventListener('click',()=>{

    const obj={

        itemName:getPName.value ,
        price:getPPrice.value,
        image:`${getPImage.value}`,
        ingredients:getPIngredients.value,
        Discount:getProductDiscount.value
    }

    productListArray.push(obj);

    setLocalstorage();


    getPName.value = '';
    getPPrice.value = '';
    getPImage.value = '';
    getPIngredients.value = '';
    getProductDiscount.value='';




});


function displaylocalstorageconsole() {
    productListArray = JSON.parse(localStorage.getItem('ProductList')) || [];
    window.addEventListener('load', console.log('product List Array Loaded from local storage:', productListArray));
}

displaylocalstorageconsole();




const productslist = document.querySelector('.js-products-list');

let CusHtml = '';

productListArray.forEach((product, index) => {


    const ingredients = product.ingredients;
    const name = product.itemName;
    const image = product.image;
    const price = product.price;
    const discount = product.Discount;
    CusHtml += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 ">
        <div class="card" style="width: 21rem;">
            <h2 style="text-align: center;margin-top: 10px;">B100${index + 1}</h2>
            <div class="card-body">
                <div class="card-text ">
                    <div class="name about-customer">
                        name: <input type="text" class="Name" value="${name}" disabled>
                    </div>
                    <div class="location about-customer">
                        ingredients: <input type="text" class="location" value="${ingredients}" disabled>
                    </div>
                    <div class="email about-customer">
                        image: <input type="text" class="email" value="${image}" disabled>
                    </div>
                    <div class="phonenumber about-customer">
                        price: <input type="text" class="PhoneNumber" value="${price}" disabled>
                    </div>
                    <div class="discount about-customer">
                        Discount: <input type="text" class="Discount" value="${discount}" disabled>
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

productslist.innerHTML = CusHtml;

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


//=================delete method=========================
function Delete(event) {
    const button = event.target;
    const index = button.getAttribute('data-index');

    
    productListArray.splice(index, 1);
    localStorage.setItem('ProductList', JSON.stringify(productListArray));

    
    location.reload();
}


// Attach event listeners
document.querySelectorAll('.Update-Button').forEach(button => {
    button.addEventListener('click', Update);
});

document.querySelectorAll('.Delete-Button').forEach(button => {
    button.addEventListener('click', Delete);
});