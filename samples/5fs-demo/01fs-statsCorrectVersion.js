const fs = require("fs")

fs.rename("./temp/hello", "./temp/world", (err) => {
  if (err) {
    throw err
  }
  console.log("finish renaming!")
  fs.stat("./temp/world", (err, stats) => {
    if (err) {
      throw err
    }
    console.log(`nature of the file: ${JSON.stringify(stats)}`)
  })
})
