import { defineConfig, globalIgnores } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo';

export default defineConfig(globalIgnores(['coverage', 'dist']), cheminfo, {
  rules: {
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'unicorn/prefer-array-from-map': 'off',
  },
});
