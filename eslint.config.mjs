import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

/**
 * Importing plugins and configs
 */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['dist', 'node_modules', '.astro', '.env'],
  },
];
