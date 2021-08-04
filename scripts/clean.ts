import fs from 'fs'
const buildfolder = './dist'

if (fs.existsSync(buildfolder)) {
  console.log('Cleaning build folder')
  fs.rmdirSync('./dist', {recursive: true})
}
