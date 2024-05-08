function findShort(s){
    return Math.min(...s.split(' ').map(value => value.length))
}

export default findShort