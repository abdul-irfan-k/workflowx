// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import filenameSimple from 'eslint-plugin-filenames-simple';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      'filename-simple': filenameSimple,
    },
    rules: {
      'filename-simple/naming-convention': [
        'error',
        {
          rule: 'camelCase',
        },
      ],
    },
  },
);
