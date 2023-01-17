const cart = ['shoes', 'tshirts', 'pants'];
const orderId = 12345
const payment = true;

function validate(cart){
    return true;
}

function createOrder(inputCart){
    return new Promise(function (resolve, reject){
        if(validate(cart)){
            const err = new Error('Cart is not Valid')
            reject(err)
        }
        else{resolve(inputCart)}     
    })
}

function proceedToPayment(payment){
    return new Promise(function(resolve, reject){
        const err = new Error('Payment Failed')
        if(!payment) resolve('Payment Successful')
        else reject(err, err.message)
    })
}

createOrder(cart)
.then((resolved) => {
    console.log(resolved)
    return proceedToPayment(payment);
})
.then(processedPayment => {
    console.log(processedPayment)    
}) 
.catch(err=>{
    console.log(err, err.message)
});



// const cart = ['shoes', 'tshirts', 'pants'];
// const orderId = 12345
// const payment = false;

// function validate(cart){
//     return true;
// }

// function createOrder(cart{
//     const promise = new Promise(function (resolve, reject){
//         if(!validate(cart)){
//             const err = new Error('Cart is not Valid')
//             reject(err, err.message)
//         }else
//         resolve(cart)
//         // if(orderId){
//         //     resolve(orderId)
//         // }
//     })
//     return promise;
// }

// function proceedToPayment(payment, orderId){
//     return new Promise(function(resolve, reject){
//         const err = new Error('Payment Failed')
//         if(payment) resolve()
//         else reject(err, err.message)
//     })
// }

// createOrder(payment)
// .then(orderId => console.log(cart))
// .then(payment => proceedToPayment(payment, orderId)) 
// .catch(err =>  console.log(err, console.log(err.message) ))

// function add( a , b ,callback){
//     c = a + b
//     callback(c)
// }

// function display(display){
//     console.log(display)
// }

// add(3, 2, display)


// console.log('1')
// setTimeout(() => {
//    console.log('2') 
// }, );                                                    
// console.log('3')