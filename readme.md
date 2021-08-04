# aws-codeartifact-auth

An npm module for using AWS CodeArtifact a little easier. Idea is to be able to configure AWS CodeArtifact in `package.json`.
## Features

- Configure login details in package.json or as external module
- Different logins for local users and CI

## Quickstart

### Usage

You can install it as a dev dependency to use it in your CI for example, but it will be like the chicken and the egg if you want to use it for login to AWS CodeArtifact since the module will not be installed until after `npm install`. At the moment I'm installing it globally in the github action in the future this should be converted into a public github action.

Add the following to package.json:

```json
{
    "awsCodeArtifact": {
      "domain": "<domain-in-aws-codeartifact>",
      "repository": "<repository-in-codeartifact>",
      "scope": "<scope>",
      "region": "<aws-region>",
      "accountId": "<aws-account-id>"
    }
  }
}
```