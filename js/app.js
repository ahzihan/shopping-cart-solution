//For Increasing Product Qty
function updateProduct(product,amount,isIncreasing) {
    const inputField = document.getElementById( product+'-qty' );
    let productQty = parseInt( inputField.value );
    if ( isIncreasing == true ) {
        productQty = productQty + 1;
    } else if(productQty>0) {
        productQty = productQty - 1;
    }
    inputField.value = productQty;

    //Update Product Price
    const productAmount = document.getElementById( product + '-price' );
    productAmount.innerText = productQty * amount;

    //Total Calculate
    calculateTotal();
    
}
function getInputValue(product) {
    const inputField = document.getElementById( product + '-qty' );
    const productQty = parseInt( inputField.value );
    return productQty;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue( 'case' ) * 59;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById( 'sub-total' ).innerText = subTotal;
    const tax = subTotal / 10;
    document.getElementById( 'tax' ).innerText = tax;
    const totalAmount = subTotal + tax;
    document.getElementById( 'total' ).innerText = totalAmount;
}

//For Increasing Phone
document.getElementById( 'phone-plus' ).addEventListener( 'click', function () {
    updateProduct( 'phone',1219, true,);
} );

//For Decreasing Phone
document.getElementById( 'phone-minus' ).addEventListener( 'click', function () {
    updateProduct('phone',1219,false);
} );


//For Increasing Case
document.getElementById( 'case-plus' ).addEventListener( 'click', function () {
    updateProduct( 'case',59, true);
} );

//For Decreasing Case
document.getElementById( 'case-minus' ).addEventListener( 'click', function () {
    updateProduct('case',59,false);
} );

