import {packageTypes} from './types'

export function parsePackageType(input: string): packageTypes {
  console.log('___!!!!!____')
  console.log(input)
  console.log(typeof input)
  const comparitor = 'npm'
  console.log((comparitor == input))
  console.log(typeof comparitor)

  if (input == comparitor)
    return packageTypes.npm
  if (input == 'poetry')
    return packageTypes.poetry

  throw new Error(`invalid package type: ${input}, supported types: ${JSON.stringify(packageTypes)}`)
}

