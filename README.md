# eslint-config-practio

Global [eslint](https://eslint.org/) config for all Practio repos

## Usage

In order to use this config in your project do the following:

Install this module:

```bash
$ npm i -D @practio/eslint-config-practio
```

After that create a file called `.eslintrc.json` in the root of the project with the following content:

```json
{
  "extends": ["@practio/practio"]
}
```

## Adding automatic formatting

First start by ensuring you have completed the steps in the **Usage** section of this readme before you continue.

Then install the modules needed for the formatting script and commit hook:

```bash
$ npm i -D husky lint-staged
```

Then add the following scripts to the package.json file of your project (notice that the `format` script is also calling a `prettier:write` script, see the [prettier-config repo](https://github.com/practio/prettier-config) on how to add it):

```jsonc
{
  "scripts": {
    // ...
    "eslint:fix": "eslint --fix . || echo Unfixable errors were ignored and should be caught by the tests",
    "format": "npm run eslint:fix && npm run prettier:write"
  }
}
```

and add the following entry to the root of the package.json file:

```jsonc
{
  "lint-staged": {
    "*.@(js|jsx|ts|mjs)": ["eslint --fix"]
  }
}
```

Next add a pre-commit hook with husky by using the `npx husky add` command (see their docs). In the `pre-commit` file inside the `.husky` folder add the following line `npx --no lint-staged`.

You have now added a `format` script that can be executed in order to format the whole repository (for repositories that are merged with ready builds on [Circle-CI](https://app.circleci.com/projects/project-dashboard/github/practio/), the merge script of [ci-merge](https://github.com/practio/ci-merge) tries to run the script `format` if one is defined in package.json).

You have also added a commit hook that ensures that all files that you make changes to will be linted and auto fixed when they are staged with git.

If you need the formatting to ignore some specific folders (for example coverage, build or dist folders) then add a `.prettierignore` and a `.eslintignore` file to the root of the repository and add the globs that needs to be ignored to both files (it uses [gitignore syntax](https://git-scm.com/docs/gitignore#_pattern_format)).

That's it. Next time you make changes to your code, it will be formatted automatically as well.

## Enable linting highliting in your editor

Most editors have extensions for eslint that allows for highlighting of linting errors while you code. It is recommnded that you install such an extention in your editor. Normally, those extensions should automatically register and use the `.eslintrc.json` file you added in the **Usage** section. You can also enable the extension "Auto fix on save" option to have most linting errors fixed automatically.

## Adding mocha test for the linting

All project's should normally also include an automatted test that ensures the the linting rules are respected. To do this for [Mocha](https://mochajs.org/) tests then start by installing the following module:

```bash
$ npm i -D mocha-eslint
```

Then add the test file called `eslint.test.js` to the folder containing your mocha tests. The content of the file should be:

```javascript
require('mocha-eslint')(['.']);
```

That's it. Now the linting will also be checked as part of your tests.
