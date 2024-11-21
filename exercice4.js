async function A() {
    return new Promise((resolve) => {
        console.log('A démarre')
        setTimeout(() => resolve(true), 2000)
        console.log('A est terminé')
    })
}

async function B() {
    return new Promise((resolve) => {
        console.log('B démarre')
        setTimeout(() => resolve(true), 3000)
        console.log('B est terminé')
    })
}

async function C() {
    await new Promise((resolve) => {
        console.log('C démarre')
        setTimeout(() => resolve(true), 1000)
        console.log('C est terminé')
    })
    return new Promise((resolve) => {
        console.log('F démarre')
        setTimeout(() => resolve(true), 2000)
        console.log('F est terminé')
    })
}

async function D() {
    await Promise.all([B(), C()])
    await new Promise((resolve, reject) => {
        console.log('D démarre')
        setTimeout(() => resolve(true), 4000)
        reject('D est terminé, une erreur est survenue');
    })
}

async function main() {
    try {
        await A()
        await Promise.all([D()])
        await D();
    } catch (err) {
        console.log(err)
    }
}

main()