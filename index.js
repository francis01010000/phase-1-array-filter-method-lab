
function findMatching(array, string){
    return array.filter(array => array.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(array => array[0] === string[0])
}

function matchName(drivers, string){
    return drivers.filter(drivers => drivers.name === string)
}