# Changelog

## 10.1.0

- Add `ignorePackages` to `import/extensions` rule. Whenever we had a `/` in an import of a module this rule would require us to add an extension however this seems to prevent us from compiling with webpack in some services.

## 10.0.1

- Internal updated which bumps both dependencies and dev-dependencies.

## 10.0.0

Breaking change:

- The enforce file extensions rule `import/extensions` has been changed for JSON-files from `never` to `always`.

## 9.0.0

- Enforce file extensions on js imports (#18)

## 8.0.0

- Bumps eslint to 7.25.0
- Bumps plugin versions
- (BREAKING) Fixes prettier plugin configuration [as per this issue](https://github.com/prettier/eslint-plugin-prettier/issues/180)
