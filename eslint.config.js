import { defineConfig, globalIgnores } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo';

export default defineConfig(globalIgnores(['coverage', 'dist']), cheminfo, {
  rules: {
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    // Off until https://github.com/cheminfo/eslint-config/pull/140 is released.
    'unicorn/prefer-array-from-map': 'off',
  },
});
