# Shared ESLint configuration for Astro projects

This [ESLint](https://eslint.org/) configuration deactivates all formatting rules of ESLint and makes sure that [Prettier](https://prettier.io/) is used for code beautifying. If you want to find out more about this approach, feel free to read my articles on this topic:

- [Efficient Code Analyzing and Formatting (for Astro) with ESLint, Prettier and VSCode – 2020 Edition](https://jlcara.github.io/Astro-eslint-prettier-vscode-2020/)

## Integrate into new project

1. Install this package as devDependency

```sh
# with Yarn
$ yarn add -D @jlcara/eslint-config-astro

# with npm
$ npm i -D @jlcara/eslint-config-astro

# with pnpm
$ pnpm add -D @jlcara/eslint-config-astro
```

2. Install peer dependencies of this package in your project as devDependencies

Therefore, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```sh
# with npm
$ npx install-peerdeps --dev @jlcara/eslint-config-astro

#with pnpm
$ pnpm dlx install-peerdeps --dev @jlcara/eslint-config-astro
```

Instead, you can do this manually my adding all entries part of the `peerDependencies` property (see `package.json`).

3. Use ESLint config in your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["@jlcara/eslint-config-astro"],
};
```