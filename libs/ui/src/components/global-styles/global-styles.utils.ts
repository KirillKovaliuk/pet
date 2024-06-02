/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
import { EXCLUDED_VARIABLES, SHORT_VARIABLES_MAP } from './global-styles.constants';

export const getThemeVariables = (theme: object, prefix?: string) => {
  const cssVariables: string[] = [];

  Object.entries(theme).forEach(([key, value]) => {
    if (prefix && EXCLUDED_VARIABLES.includes(prefix)) {
      // skip generating of variables from EXCLUDED_VARIABLES.
    } else if (typeof value === 'object') {
      const shortKey = SHORT_VARIABLES_MAP[key] || key;
      const nextPrefix = `${prefix ? `${prefix}-` : ''}${shortKey}`.replace(/_/g, '-');

      cssVariables.push(...getThemeVariables(value, nextPrefix));
    } else {
      const variableName = `--${prefix ? `${prefix}-` : ''}${key}`.replace(/_/g, '-');

      cssVariables.push(`${variableName}: ${value};`);
    }
  });

  return cssVariables;
};

export function getThemeVariablesForStorybook(theme: any, prefix = '') {
  const convertedTheme: object[] = [];

  // @TODO: check short variables name.

  Object.entries(theme).forEach(([key, value]) => {
    if (typeof value === 'object') {
      const shortKey = SHORT_VARIABLES_MAP[key] || key;
      const nextPrefix = `${prefix ? `${prefix}-` : ''}${shortKey}`;

      const nestedTheme = getThemeVariablesForStorybook(value, nextPrefix);
      convertedTheme.push(...nestedTheme);
    } else {
      const variableName = `--${prefix ? `${prefix}-` : ''}${key}`;

      convertedTheme.push({
        variableName,
        value,
      });
    }
  });

  return convertedTheme;
}

export function convertPalette(palette: object, prefix = '') {
  const convertedPalette: object[] = [];

  Object.entries(palette).forEach(([key, value]) => {
    if (typeof value === 'object') {
      const nestedPalette = convertPalette(value, `${prefix}${key}.`);
      convertedPalette.push(...nestedPalette);
    } else {
      const variableName = `${prefix}${key}`;
      convertedPalette.push({ variableName, value });
    }
  });

  return convertedPalette;
}
