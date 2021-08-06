import {main} from './index'

async function codeArtifactAuthOnCli(): Promise<void> {
  const packageJson = process.env.PACKAGE_FILE ? require(process.env.PACKAGE_FILE) : require( process.cwd() + '/package.json' )
  await main(packageJson.awsCodeArtifact)
}

codeArtifactAuthOnCli()
