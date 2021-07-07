let p = new Promise((resolve, reject) => {
    console.log("start promise function");
    setTimeout(() => {
        if (Math.random() < 1.5) {
            console.log("resolving promise");
            resolve("resolve value");
        } else {
            console.log("rejecting promise");
            reject("reject value");
        }
    }, 10);
    console.log("finish promise function");
});

const p1 = p.then(
    value => {
        console.log("promise was resolved with value " + value);
        return Promise.reject("rejected in transit");
    }
);

const p2 = p1.then(
    v => {
        console.log("p2 resolved with: " + v);
    }
    // ,
    // reason => {
    //     console.log("p2 rejected with: " + reason);
    //     return "new p2 reject";
    // }
);
// p2.then(null,
const p3 = p2.catch(
    reason => {
        console.log("promise was rejected with value " + reason);
        return "new reject value";
    }
);

p3.finally(() => {
    console.log("VISADA !!!");
});


console.log("program finished");


// function test() {
//     console.log("test");
//     // return undefined;
// }

// let rez = test();
// console.log(rez);
