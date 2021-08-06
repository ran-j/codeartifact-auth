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

    // Other Stuff
    const time = (new Date()).toTimeString()
    setOutput('status', time)
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    setFailed(error.message)
  }
}

codeArtifactGithubAction()

