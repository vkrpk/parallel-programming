async function A() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('A')
            resolve()
        }, 2000)
    })
}

async function B() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('B')
            resolve()
        }, 2000)
    })
}

async function C() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('C')
            resolve()
        }, 2000)
    })
}

async function D() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('D')
            resolve()
        }, 2000)
    })
}

async function main() {
    await A()
    await Promise.all([B(), C()])
    return D();
}

main()