# Shared Prettier configuration

This shared [Prettier](https://prettier.io/) configuration changes some of the default behavior.

## Integrate into new project

1. Install this package as devDependency

```sh
# with npm
$ npm i -D @jlcara/prettier-config

# with pnpm
$ pnpm add -D @jlcara/prettier-config
```

2. Install peer dependencies of this package in your project as devDependencies

Therefore, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```sh
# with Yarn
$ yarn dlx install-peerdeps --dev @jlcara/prettier-config

# with npm
$ npx install-peerdeps --dev @jlcara/prettier-config

#with pnpm
$ pnpm dlx install-peerdeps --dev @jlcara/prettier-config
```

3. Use Prettier config in your project

Create a `.prettierrc` file in project root with the following content:

```
"@jlcara/prettier-config"
```