#!/usr/bin/env node
import {CodeArtifact} from 'aws-sdk'
import {execSync} from 'child_process'
import {awsCodeArtifactConfig} from './types'

function errorHandler(msg: string): void {
  console.error(msg)
  process.exit(1)
}

// eslint-disable-next-line complexity
function parseConfig(config: awsCodeArtifactConfig): awsCodeArtifactConfig {
  if (!config?.domain)
    errorHandler('Domain does not exist does not exist in package.json')

  if (!config?.accountId)
    errorHandler('accountId does not exist does not exist in package.json')

  if (!config?.repository)
    errorHandler('repository does not exist does not exist in package.json')

  if (!config?.region)
    errorHandler('region does not exist does not exist in package.json')

  if (!config?.scope)
    errorHandler('scope does not exist does not exist in package.json')

  return {
    domain: config.domain,
    accountId: config.accountId,
    repository: config.repository,
    region: config.region,
    scope: config.scope
  }
}

export async function main(config: awsCodeArtifactConfig): Promise<void> {

  const {domain, accountId, region, repository, scope} = parseConfig(config)

  const endpoint = `//${domain}-${accountId}.d.codeartifact.${region}.amazonaws.com/npm/${repository}/`

  const codeArtifact = new CodeArtifact()
  const params = {
    domain,
    domainOwner: accountId,
  }
  const token = await codeArtifact.getAuthorizationToken(params).promise().catch(e => errorHandler(e))
  if (token?.authorizationToken === undefined)
    errorHandler('Failed to retrieve auth token')

  execSync(`npm config set ${scope}:registry https://${domain}-${accountId}.d.codeartifact.${region}.amazonaws.com/npm/${repository}/`)
  execSync(`npm config set ${endpoint}:_authToken=${token?.authorizationToken}`)
  execSync(`npm config set ${endpoint}:always-auth=true`)
}
