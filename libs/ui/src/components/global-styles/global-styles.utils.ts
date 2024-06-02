import { EXCLUDED_VARIABLES, SHORT_VARIABLES_MAP } from './global-styles.constants';

export const getThemeVariables = (theme: object, prefix?: string) => {
  const cssVariables: string[] = [];
  const entries = Object.entries(theme);

  entries.forEach(([key, value]) => {
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
