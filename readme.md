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

Once you've added the config to your package.json. You will need to assumerole/set your aws credentials within your running context (CI/Terminal).

Then run ```codeartifact-auth```

It will update your .npmrc file the scope and token.

#### Windows Users

I've noticed on windows the path isn't set by default when you install the tool globally. So I recommend going into your user system path and adding it in there.

example

![Image of ](./docs/updating-path-windows.png)

Command usage on windows:

```codeartifact-auth.cmd```