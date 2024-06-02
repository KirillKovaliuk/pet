import { createContext } from 'react';

import { IThemeHandlers } from './theme.declarations';

export const ThemeHandlersContext = createContext<IThemeHandlers>({
  mode: 'dark',
  onChangeMode: () => null,
  onChangeBrandColor: () => null,
  schema: {},
  palette: {},
});

export const ThemeHandlersProvider = ThemeHandlersContext.Provider;
