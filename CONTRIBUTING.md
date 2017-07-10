# Development

Thanks for for the interest in contributing to Skift!

Please read this document to learn how to work this project.

## Commiting new code

Skift is released automatically with [semantic-release.](https://github.com/semantic-release/semantic-release)

We use [Commitizen](https://github.com/commitizen/cz-cli) to ensure the quality of commit messages, please provide the maximum amount of details about your commit.

To commit your code run:

```bash
npm run cz
```

## Running Skift it test mode

When developing, it's preferable to run the project in test mode:

```
npm test
```

## Building a distribution for the new release

The following command will produce the development and minified versions of Skift distribution in `dist/` folder.

```
npm run build:prod
```
