"use strict";

/** Functions **/
//language Object
const rus = {
    CART: {
        name: {
            title: "Имя.",
            placeholder: "Ваше имя."
        },
        phone: {
            title: "Номер телефона.",
            placeholder: "Ваш телефон"
        }
    }
};

//create element with params (tag, className?, content?)
const createElement = function (tag, className, content) {
    let el = document.createElement(tag);
    if (className)
        el.className = className;
    if (content)
        el.innerHTML = content;

    return el;
};

//create payment block return
const createPaymentElement = function() {
    let el = document.createElement('div');

    return el;
}

//create input field for card page
const createField = function(type, name) {
    let el = createElement('div', 'ec-cart__email ec-cart-email');
    el.appendChild(createElement('div', 'ec-cart-email__text', "test for " + name));

    let fieldWrapper = createElement('div', 'ec-cart-email__input');
    fieldWrapper.appendChild(createElement('div', 'form-control form-control--flexible form-control--large'));

    fieldWrapper.appendChild(createElement('input', 'form-control__text'));
    let placeholderWrapper = createElement('div', 'control__placeholder');

    placeholderWrapper.appendChild(createElement('div', 'control__placeholder-inner', "text text"));
    fieldWrapper.appendChild(placeholderWrapper);

    el.appendChild(fieldWrapper);
    return el;
};


//append payment block to the payment table

//handle for new payment method

//create payment block return


//create input field for card page

//append payment block to the payment table

//handle for new payment method

// get payment selector for append there new payment method
const getPaymentSelector = function(selector) {

};


/** include to site **/

if (
    typeof(Ecwid) == 'object'
    && typeof(Ecwid.OnPageLoad) == 'object'
) {
    Ecwid.OnPageLoad.add(function(page) {
// Init order fields
        console.log('Ecwid.Cart', Ecwid.Cart)
    });
    Ecwid.OnPageLoaded.add(function(page) {
// Init order fields

        // If Thank you page is opened, redirect customer to set URL in the app
        if (
            typeof(page) == 'object'
            && (page.type == 'CHECKOUT_PAYMENT_DETAILS') // if offline or online payment method was used
        ) {
            Ecwid.Cart.get(function(cart) {
                console.log("cart ", cart);
            });
        }
    });
}