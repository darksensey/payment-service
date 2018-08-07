// constant with payment method name
const payment = 'Оплата частями';
//endpoint
const baseUrl = 'localhost';

//send data to backend
const sendData = function() {

};

//handler function for submit button
const submitHandler = function (e) {
    //get cart items from cart
    Ecwid.Cart.get(function(cart) {
        console.log("cart ", cart);
        //get selected payment
        //if method is our
        if (cart.paymentMethod === payment) {
            //send items to backend
        }
    });
    //display response
};

// constructor
const init = function () {
    if (typeof(Ecwid) == 'object' && typeof(Ecwid.OnPageLoad) == 'object') {
        //detect checkout page
        Ecwid.OnPageLoaded.add(function(page) {
            console.log('page :: ', page);
            if (typeof(page) == 'object'
                && (page.type == 'CHECKOUT_PLACE_ORDER') // if offline or online payment method was used
            ) {
                //handle submit button
                    //get submit buttom
                // document.querySelector('.ecwid-btn--continue').addEventListener("click", function()  {
                //     console.log("consosfasdf");
                // });
                // console.log('submit button ', submitButtonSelector);
                submitHandler();
                // if (submitButton) {
                //     //set listener
                //     console.log("set Handler");
                //
                // }
            }
        });
    }
};

init();