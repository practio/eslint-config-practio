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
