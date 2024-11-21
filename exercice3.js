async function main() {
    async function telechargement1() {
        return new Promise((resolve) => {
            console.log('telechargement1')
            setTimeout(() => resolve('telechargement1'), 6000)
        })
    }

    async function telechargement2() {
        return new Promise((resolve) => {
            console.log('telechargement2')
            setTimeout(() => resolve('telechargement2'), 3000)
        })
    }

    async function telechargement3() {
        return new Promise((resolve) => {
            console.log('telechargement3')
            setTimeout(() => resolve('telechargement3'), 4000)
        })
    }

    await Promise.all([telechargement1, telechargement2, telechargement3, await Promise.race([telechargement1(), telechargement2(), telechargement3()]).then(alert)])

    console.log("tout est terminé")
}

main()