const { resolve } = require('node:path')

const project = resolve(__dirname, 'vite.config.json')

module.exports = {
  root: true,
  plugins: ['prettier', 'import'],
  extends: [
    require.resolve('@vercel/style-guide/eslint/react'),
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': { typescript: { project } }
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto'
      }
    ],
    'import/no-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'object',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off'
  }
}
