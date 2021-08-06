import fs from 'fs'
const cliFolder = './dist'
const actionFolder = './action'

if (fs.existsSync(cliFolder)) {
  console.log(`Cleaning ${cliFolder}`)
  fs.rmdirSync(cliFolder, {recursive: true})
}

if (fs.existsSync(actionFolder)) {
  console.log(`Cleaning ${actionFolder}`)
  fs.rmdirSync(actionFolder, {recursive: true})
}
