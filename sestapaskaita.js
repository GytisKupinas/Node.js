var sk = 3;

var kitas = 10 - ++sk + sk++ - ++sk;

//var kitas = 5 + sk++;                      // operatorius (sk++) (++sk)
                                // paimam sk reiksme (3) ir atsimenam
                                // padidinam sk 1-u -> sk:4
                                // 5 + 3 = 8
                                // i kitas padedam 8 
                                // rezultatas 4 ir 8 
//var kitas = 5 + ++sk;      // rezutatas bus 4 ir 9

console.log(sk);
console.log(kitas);
