import {
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { PALETTE } from '../../constants';
import { TDarkTheme } from '../../styled';
import { TPalette } from '../../types';

import { ThemeHandlersContext } from './theme.context';
import {
  IPaletteChangeAction,
  TBrandColor,
  TThemeMode,
} from './theme.declarations';
import { applyPaletteForTheme } from './theme.utils';

const paletteReducer = (state: TPalette, action: IPaletteChangeAction) => {
  switch (action.type) {
    case 'change-brand-color': {
      return {
        ...PALETTE,
        brand: PALETTE[action.payload],
      };
    }
    default: return state;
  }
};

export const usePalette = () => {
  // @TODO: set brand color from local storage.
  const [palette, dispatch] = useReducer(paletteReducer, PALETTE);

  const handleChange = useCallback((brandColor: TBrandColor) => {
    dispatch({ type: 'change-brand-color', payload: brandColor });
  }, [dispatch]);

  return ({
    value: palette,
    onChange: handleChange,
  });
};

export const useThemeMode = (palette: TPalette) => {
  const [mode, setMode] = useState<TThemeMode>('dark');

  const handleChange = useCallback((themeMode: TThemeMode) => {
    setMode(themeMode);
  }, []);

  const schema = useMemo(
    () => applyPaletteForTheme(mode, palette) as TDarkTheme,
    [mode, palette],
  );

  return {
    value: mode,
    schema,
    onChange: handleChange,
  };
};

export const useTheme = () => useContext(ThemeHandlersContext);
