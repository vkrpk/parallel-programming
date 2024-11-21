import './style.css'
import parallelProgrammingLogo from './public/parallelProgramming.jpg'
// import exercice1 from '/evaluation'

document.querySelector('#app').innerHTML = `
  <div>
      <a href="https://www.youtube.com/watch?v=_AXooxH7PVw" target="_blank">
      <img src="${parallelProgrammingLogo}" class="logo vanilla" alt="Parallel Programming logo" />
    </a>
  </div>
`

async function A() {
    return new Promise((resolve) => {
        console.log('A démarre')
        setTimeout(() => resolve(true), 2000)
        console.log('A est terminé')
    })
}

// Exercice 5

async function main() {
    const tableau1 = Array(1).fill(3300).map((x, y) => x + y)
    const tableau2 = Array(3301).fill(6600).map((x, y) => x + y)
    const tableau3 = Array(6601).fill(10000).map((x, y) => x + y)

    async function process1() {
        return new Promise(function(resolve, reject) {
            let total1 = 0
            for (const number of tableau1) {
                total1 += number
            }
            resolve(total1);
        });
    }

    async function process2() {
        return new Promise(function(resolve, reject) {
            let total2 = 0
            for (const number of tableau2) {
                total2 += number
            }
            resolve(total2);
        });
    }

    async function process3() {
        return new Promise(function(resolve, reject) {
            let total3 = 0
            for (const number of tableau3) {
                total3 += number
            }
            resolve(total3);
        });
    }

    function count(chaine, sousChaine) {
        return chaine.split(sousChaine).length - 1;
    }

    let resultatsDesProcess = await Promise.all([process1(), process2(), process3()])
    let somme = resultatsDesProcess[0] + resultatsDesProcess[1] + resultatsDesProcess[2]
    console.log(somme)

    async function fetchFile1() {
        fetch('./Evaluation2024_2025/Eval_file1_rattrapage.txt')
            .then( r => r.text() )
            .then( t => console.log(count(t, ' '), count(t, 'Lorem')))
    }

    async function fetchFile2() {
        fetch('./Evaluation2024_2025/Eval_file2_rattrapage.txt')
            .then( r => r.text() )
            .then( t => console.log(count(t, ' '), count(t, 'Lorem')))
    }

    async function chucknorrisApi() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then( r => r.json() )
            .then( t => console.log(count(t['value'], 'value')))
    }

    await Promise.all([fetchFile1(), fetchFile2(), chucknorrisApi()])
}

main()

