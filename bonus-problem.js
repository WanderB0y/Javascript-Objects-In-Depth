const myConsole = {
    myConsole: function log (message) {
        console.log(message)
    }
}
myConsole.myConsole("Hello World");

const myConsoles = {
    log: (message) => {
        console.log(message);
    }
}

myConsoles.log("Hello, Nigga");

console.log(console)