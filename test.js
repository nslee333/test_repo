const linkify = require("linkify-it")()

// let content = "@everyone github.com"
let content = "@everyone github.com github.com"
// ? Goal is this -> "@everyone <github.com>"


let arr = content.split("")


let resultLength = linkify.match(content).length

for (let i = 0; i < resultLength; i++ ) {
  let result = linkify.match(content)
  // result = linkify.match(content)
  // console.log(result[j])
  
  // console.log(result[i].index)
  arr.splice(result[i].index, 0, "<")
  arr.splice(result[i].lastIndex + 1, 0, ">")

  content = arr.join("")
}


// console.log(arr.length)
// console.log(result)
console.log(content)
