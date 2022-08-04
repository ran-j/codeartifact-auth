import {packageTypes} from './types'

export function parsePackageType(input: string): packageTypes {
  console.log('__inside__')
  console.log(input)
  console.log(typeof input)
  console.log((input == 'npm'))
  if (input == 'npm')
    return packageTypes.npm
  if (input == 'poetry')
    return packageTypes.poetry

  throw new Error(`invalid package type: ${input}, supported types: ${JSON.stringify(packageTypes)}`)
}

