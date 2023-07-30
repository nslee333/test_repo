const linkify = require("linkify-it")()

// let content = "@everyone github.com"
let content = "@everyone github.com"
// ? Goal is this -> "@everyone <github.com>"


// let arr = content.split("")


// let resultLength = linkify.match(content).length

// for (let i = 0; i < resultLength; i++ ) {
  //   let result = linkify.match(content)
  
  //   arr.splice(result[i].index, 0, "<")
  //   arr.splice(result[i].lastIndex + 1, 0, ">")
  
  //   content = arr.join("")
  // }
  
  
  // console.log(content)
  
const matches = linkify.match(content);

let offset = 0;
for (const match of matches) {
  const linkStart = match.index + offset;
  const linkEnd = match.lastIndex + offset;

  const linkified = `<${match.text}>`;
  content = content.slice(0, linkStart) + linkified + content.slice(linkEnd + 1);

  offset += linkified.length - (match.lastIndex - match.index + 1);
}

console.log(content);