const takeOrder = (customer, callback) => {
    console.log('take order', customer);
    callback(customer)
}

const proceedOrder = (customer, callback) => {
    console.log('processing order for ', customer);

    setTimeout(() => {
        console.log('cooking completed for', customer);
        callback(customer);
    }, 3000);
}

const completedOrder = (customer) => {
    console.log('completed order for', customer);
}

takeOrder(1, (customer) => {
    proceedOrder(customer, (customer) => {
        completedOrder(customer);
    })
})









