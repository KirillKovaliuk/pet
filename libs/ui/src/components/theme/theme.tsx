'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeHandlersProvider } from './theme.context';
import { IThemeProps } from './theme.declarations';
import { usePalette, useThemeMode } from './theme.hooks';

export function Theme({
  children,
  mode: externalMode,
  brandColor,
}: IThemeProps) {
  const { value: palette, onChange: onChangeBrandColor } = usePalette();
  const { value: mode, schema, onChange: onChangeMode } = useThemeMode(palette);

  useEffect(() => {
    if (externalMode) {
      onChangeMode(externalMode);
    }
  }, [externalMode, onChangeMode]);

  useEffect(() => {
    if (brandColor) {
      onChangeBrandColor(brandColor);
    }
  }, [brandColor, onChangeBrandColor]);

  const themeHandlers = {
    mode,
    onChangeMode,
    onChangeBrandColor,
  };

  return (
    <ThemeProvider theme={schema}>
      <ThemeHandlersProvider value={themeHandlers}>
        {children}
      </ThemeHandlersProvider>
    </ThemeProvider>
  );
}
