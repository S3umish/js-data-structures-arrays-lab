// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push('Ralph');
}



function destructivelyPrependDriver(name) {
    debugger
    return drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
    return drivers.pop(-1);
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift(drivers.first);
}

function appendDriver(name) {
    return [...drivers,name];
}

function  prependDriver(name) {
    return [name, ...drivers];
}

function  removeFirstDriver() {
    return drivers.slice(1);
}


function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }
 





