module.exports = function reverse (n) {
  let abs = Math.abs(n)
  let x = abs.toString()
  let length = x.length
  let reverse = ""
    for(let i=0; i < length; i++){
     reverse += x.slice(length-i-1,length-i)
  }
    return reverse
}
