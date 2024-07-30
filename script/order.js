
//================Order List ==================
const OrderList = [
    {
        OrderID: 'OR001',
        CustomerTele: '077',
        CustomerName: 'Kamal',
        OrderDate: '2024-02-02',
        OrderTime: '09.30.30',
        OredrTotal: 2000,
        OrderDiscount: 10,
        SubTot: 1900,
        OrderIteams:
            [{
                IteamCode: 'B002',
                PriceForIteam: 2000.00,
                Discount: 0,
                Quantity: 1
            },
            {
                IteamCode: 'B002',
                PriceForIteam: 2000.00,
                Discount: 0,
                Quantity: 1
            }]

    },
    {
        OrderID: 'OR002',
        CustomerTele: '077',
        CustomerName: 'Kamal',
        OrderDate: '2024-02-02',
        OrderTime: '09.30.30',
        OredrTotal: 2000,
        OrderDiscount: 10,
        SubTot: 1900,
        OrderIteams:
            [{
                IteamCode: 'B001',
                PriceForIteam: 2000.00,
                Discount: 0,
                Quantity: 1
            }
            ]

    },

];

let OrderHTML = ``;

let Ordertable = `
     <details>
                                <summary>Order Iteams</summary>
                                <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">IteamCode</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Discount</th>
                                        <th scope="col">Quantity</th>
                                      </tr>
                                    </thead>
                           
`;



OrderList.forEach((order) => {
    OrderHTML += `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title card-T">${order.OrderID}</h5>
            <p class="card-text card-b">

                Customer Name: <span>${order.CustomerName}</span>  <br>
                Customer Telephone number: <span>${order.CustomerTele}</span>  <br>
                Order Date: <span>${order.OrderDate}</span><br>
                OrderTime: <span>${order.OrderTime}</span><br>
                OredrTotal: <span>${order.OredrTotal}</span> <br>
                OrderDiscount: <span>${order.OrderDiscount}</span><br>
                Total Amount : <span>${order.SubTot}</span>
               
             </p>
             <button class="Delete-Order-btn">Delete Order</button>
      </div>
    </div>
    `;
});

const OrdersElement = document.querySelector('.js-Orders');
OrdersElement.innerHTML = OrderHTML;




