// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import filenameSimple from 'eslint-plugin-filenames-simple';
import importPlugin from 'eslint-plugin-import';
import tsParser from '@typescript-eslint/parser';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  importPlugin.flatConfigs['recommended'],

  {
    plugins: {
      'filename-simple': filenameSimple,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'import/order': 'error',
      'import/named': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },

  {
    ignores: ['**/entities/**/*.ts', '**/models/**/*.ts'],
    rules: {
      'filename-simple/naming-convention': [
        'error',
        {
          rule: 'camelCase', // Allow UserEntity.ts instead of User.ts
        },
      ],
    },
  },

  {
    files: ['**/entities/**/*.ts', '**/models/**/*.ts'],
    rules: {
      'filename-simple/naming-convention': [
        'error',
        {
          rule: 'PascalCase', // Allow UserEntity.ts instead of User.ts
        },
      ],
    },
  },
);
