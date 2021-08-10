import {getInput, setOutput, setFailed} from '@actions/core'
import github from '@actions/github'
import {main} from './index'

async function codeArtifactGithubAction(): Promise<void> {
  try {
    const domain = getInput('domain')
    const accountId = getInput('accountId')
    const region = getInput('region')
    const repository = getInput('repository')
    const scope = getInput('scope')
    console.log(
      domain,
      accountId,
      region,
      repository,
      scope
    )
    main({domain, accountId, region, repository, scope})
  } catch (error) {
    setFailed(error.message)
  }
}

codeArtifactGithubAction()

