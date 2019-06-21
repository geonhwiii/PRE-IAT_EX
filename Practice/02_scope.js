// 2. scope

var A = "글로벌";

function log() {
    console.log(A);
}

function log2() {
    var A = "로컬";
    log();
}

log(); // 글로벌
log2(); // 글로벌