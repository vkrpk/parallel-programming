async function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is ordered')
            resolve()
        }, 2000)
    })
}

async function bakePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is baked')
            resolve()
        }, 2000)
    })
}

async function receivePizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is received')
            resolve()
        }, 2000)
    })
}

async function eatPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Pizza is eaten')
            resolve()
        }, 2000)
    })
}

async function doLaundry() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Laundry is done')
            resolve()
        }, 7000)
    })
}

function onError(error) {
    console.error(`Error: ${error}`)
}

async function main() {
    try {
        await orderPizza()
        await bakePizza()
        await receivePizza()
        await eatPizza()
    } catch (error) {
        onError(error)
    }
}

main()
doLaundry()
