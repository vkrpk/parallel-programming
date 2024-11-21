// Let's do the same thing using promises, we'll order a pizza, bake it, receive it and eat it. 
// We'll also do laundry during the time we are waiting for the pizza.

function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is ordered')
            resolve()
        }, 2000)
    })
}

function bakePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is baked')
            resolve()
        }, 2000)
    })
}

function receivePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is received')
            resolve()
        }, 2000)
    })
}

function eatPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is eaten')
            resolve()
        }, 2000)
    })
}

function doLaundry() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Laundry is done')
            resolve()
        }, 7000)
    })
}

function onError(error) {
    console.error(`Error : ${error}`)
}

orderPizza()
    .then(bakePizza)
    .then(receivePizza)
    .then(eatPizza)
    .catch(onError)

doLaundry()