function it(desc, fn) {
    try {
        fn();
        logSuccess(desc);
    }
    catch(error) {
        logFailure(desc);
        console.error(error);
    }
}

function assert(isTrue) {
    if (!isTrue) {
        throw new Error();
    }
}

function logSuccess(desc) {
    document.write(`<div style="background-color: green;">${desc}</div>`)
    console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
}

function logFailure(desc) {
    document.write(`<div style="background-color: red;">${desc}</div>`)
    console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
}