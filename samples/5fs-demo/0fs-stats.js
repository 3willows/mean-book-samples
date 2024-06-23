// fs.stats does this https://www.geeksforgeeks.org/node-js-fs-stat-method/

const fs = require('fs')

// NB you need "./" as opposed to just "/" here, in contrast with the example from the book (on a Mac enviornemnt)

fs.rename('./temp/hello', './temp/world', (err) => {
  if (err){
    throw err;
  }
  console.log('finish renaming!')
})


// fs.rename('./temp/world', './temp/hello', (err) => {
//   if (err){
//     throw err;
//   }
//   console.log('finish renaming it back to "hello"!')
// })