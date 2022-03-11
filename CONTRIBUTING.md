# DeFiChain.com Contributing Guide

## Developing Guides

### TODO comments

TODO comments should usually include the author's github username in parentheses. Example:

```ts
// TODO(joeldavidw): Add tests.
```

### Code of conduct

Please follow the guidelines outlined at https://github.com/DeFiCh/.github/blob/main/CODE_OF_CONDUCT.md

### Explicit over implicit

Each package, feature, code and decision should be explicit and well documented over implicitly guessing.

### TypeScript

TypeScript must be used for all code written in this project.

### Translations

Translation files are located in `/public/locales/<Locale>` and `/content/<MD_Page>` for markdown pages.

### `constants.ts` not allowed

It's an anti-pattern for scaling code, it gives a false impression of separation of concern. All it does is create a
mass of code concentration within project that were better separated.

> An analogy for this problem is file organization in projects. Many of us have come to agree that organizing files by
> file type (e.g. splitting everything into html, js and css folders) don't really scale. The code related to a feature
> will be forced to be split between three folders, just for a false impression of "separation of concerns". The key
> here is that "concerns" is not defined by file type. Instead, most of us opt to organize files by feature or
> responsibility. https://github.com/vuejs/rfcs/issues/55#issuecomment-504875870

### Minimize dependencies (target zero)

### Do not depend on external code. (never if possible)

### Top level functions should not use arrow syntax.
