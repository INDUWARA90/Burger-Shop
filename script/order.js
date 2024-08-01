
//================Order List ==================
let Orders = JSON.parse(localStorage.getItem('Orders')) || [];

console.log(Orders);

let OrderHTML = ``;




Orders.forEach((order,index) => {


    OrderHTML += `
    <div class="card col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-3 "style="width:28rem" >
      <div class="card-body">
        <h5 class="card-title card-T">${order.OrderID}</h5>
            <p class="card-text card-b">
                Order Date: <span>${order.date}</span><br>
                OrderTime: <span>${order.time}</span><br>
                OredrTotal: <span>${order.total}</span> <br>
                OrderDiscount: <span>${order.discount}</span><br>
                Total Amount : <span>${order.subtotal}</span>
                
                
             </p>
             <button class="Delete-Order-btn" data-index="${index++}">Delete Order</button>
      </div>
    </div>
    `;
});

const OrdersElement = document.querySelector('.js-Orders');
OrdersElement.innerHTML = OrderHTML;




//=================delete method=========================
function Delete(event) {
    const button = event.target;
    const index = button.getAttribute('data-index');

    
    Orders.splice(index, 1);
    localStorage.setItem('Orders', JSON.stringify(Orders));

    
    location.reload();
}


// Attach event listeners
document.querySelectorAll('.Delete-Order-btn').forEach(button => {
    button.addEventListener('click', Delete);
});



