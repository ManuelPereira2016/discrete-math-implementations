var find = require('./set-utils.js');

function createSetsFromList(index = 0, list = [1,2,3], newList = [], n = 0) {
    let len = list.length -1;
    let set = [];
    if (n > len) {
        newList.push(list);
        return newList;
    }

    if (n === 0) {
        set = [list[index]];
    } else {
        if (list[index] != list[n]) {
            set = [list[index], list[n]];
        }
    }

    if (set.length > 0) {
        newList.push(set);
    }

    return createSetsFromList(index, list, newList, n + 1);
}

function recursiveBuilder(origSet, powerSet = [], n = 0) {
    const len = origSet.length -1;

    if (n > len) {
        return powerSet;
    }

    const newSets = createSetsFromList(n, origSet);
    const newPowerSet = checkSets(newSets, powerSet);

    return recursiveBuilder(origSet, newPowerSet, n + 1);
}

function checkSets(newSets, powerSet = [], n = 0) {
    let len = newSets.length - 1;
    let newPowerSet = powerSet.slice(0, powerSet.length);

    if (n > len) {
        return powerSet;
    }

    if (!find(newPowerSet, newSets[n])) {
        newPowerSet.push(newSets[n]);
    }

    return checkSets(newSets, newPowerSet, n + 1);
}

function main(origSet = [1,2,3]) {
    console.log('Powerset is:')
    const powerSet = recursiveBuilder(origSet);
    powerSet.unshift([]);

    console.log(powerSet);
    console.log('Cardinality of the powerset is: ' + powerSet.length);

    return powerSet;
}

main();
