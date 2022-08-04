import {packageTypes} from './types'

export function parsePackageType(input: string): packageTypes {
  const npmname = 'npm'
  const pyname = 'poetry'
  if (input.trim() == npmname.trim())
    return packageTypes.npm
  if (input == 'poetry')
    return packageTypes.poetry

  throw new Error(`invalid package type: ${input}, supported types: ${JSON.stringify(packageTypes)}`)
}

