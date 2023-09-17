module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:typescript-sort-keys/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:astro/recommended',
		'standard',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'typescript-sort-keys',
		'prettier'
	],
	rules: {
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error'
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
				'space-before-function-paren': 'off',
				'no-unused-vars': 'warn',
				'@typescript-eslint/no-explicit-any': 'warn',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						argsIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						caughtErrorsIgnorePattern: '^_'
					}
				],
				'no-multiple-empty-lines': 'off',
				'no-tabs': 'off',
				indent: ['warn', 'tab'],
				quotes: ['warn', 'single'],
				'jsx-quotes': ['warn', 'prefer-single'],
				'eol-last': 'off',
				quotes: 'off'
			}
		}
	]
}
