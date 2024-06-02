import { createContext } from 'react';

import { IThemeHandlers } from './theme.declarations';

export const ThemeHandlersContext = createContext<IThemeHandlers>({
  mode: 'dark',
  onChangeMode: () => null,
  onChangeBrandColor: () => null,
});

export const ThemeHandlersProvider = ThemeHandlersContext.Provider;
