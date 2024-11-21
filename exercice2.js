async function main() {
    const tableau1 = Array(100).fill(1).map((x, y) => x + y)
    const tableau2 = Array(200).fill(101).map((x, y) => x + y)
    const tableau3 = Array(201).fill(300).map((x, y) => x + y)

    async function tache1() {
        return new Promise(function(resolve, reject) {
            let total1 = 0
            for (const number of tableau1) {
                total1 += number
            }
            resolve(total1);
        });
    }

    async function tache2() {
        return new Promise(function(resolve, reject) {
            let total2 = 0
            for (const number of tableau2) {
                total2 += number
            }
            resolve(total2);
        });
    }

    async function tache3() {
        return new Promise(function(resolve, reject) {
            let total3 = 0
            for (const number of tableau3) {
                total3 += number
            }
            resolve(total3);
        });
    }

    let resultatsDesTaches = await Promise.all([tache1(), tache2(), tache3()])

    async function sommeDesTotaux() {
        return new Promise(function(resolve, reject) {
            let somme = resultatsDesTaches[0] + resultatsDesTaches[1] + resultatsDesTaches[2]
            console.log(somme)
            resolve(somme);
        });
    }

    async function afficherLesResultatsSeparemment() {
        return new Promise(function(resolve, reject) {
            console.log(resultatsDesTaches[0])
            console.log(resultatsDesTaches[1])
            console.log(resultatsDesTaches[2])
            resolve(true);
        });
    }

    await Promise.all([sommeDesTotaux(), afficherLesResultatsSeparemment()])
}

main()