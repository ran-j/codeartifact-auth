import {packageTypes} from './types'

export function parsePackageType(input: string): packageTypes {
  if (JSON.stringify(input) == JSON.stringify('npm'))
    return packageTypes.npm
  if (input == 'poetry')
    return packageTypes.poetry

  throw new Error(`invalid package type: ${input}, supported types: ${JSON.stringify(packageTypes)}`)
}

