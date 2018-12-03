/* Using recursion to provide less code lines than imperative */
function setsEqual(set1, set2, n = 0) {
    let len = set2.length -1;
    if (n > len) {
        return false;
    }

    if (set2[n] == set1) {
        return true;
    }

    return setsEqual(set1, set2, n + 1);
}

function includesIn(set1, set2, n = 0) {
    let end = set1.length -1 || 0;
    if (n > end) {
        return false;
    }

    if (set1.length == set2.length) {
        if (setsEqual(set1[n] || set1, set2)) {
            if (n == end) {
                return true;
            }
        } else {
            return false;
        }
    }

    return includesIn(set1, set2, n + 1);
}

function findSet(set_data, set, n = 0) {
    let len = set_data.length -1;
    if (!len) {
        return false;
    }

    if (n > len) {
        return false;
    }

    if (!set.hasOwnProperty("length")) {
        if (set_data[n] == set) {
            return true;
        }
    } else {
        if (includesIn(set_data[n], set)) {
            return true;
        }
    }
    return findSet(set_data, set, n + 1);
}

module.exports = findSet;

// findSet([1,[2,3]], [1, [3,2]]); // should return TRUE
// findSet([1,2,3], [2]); // should return TRUE
// findSet([1,2], [[2], [3], 4, [2,1]]) //
