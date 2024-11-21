const exercice1 = (async () => {
    const a = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("A"), 2000);
    });
    const b = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("B"), 2000);
    });
    const c = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("C"), 2000);
    });
    const d = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("D"), 2000);
    });

    await console.log(a())
    Promise.all([b(), c()])
    d();
})();

export default exercice1;