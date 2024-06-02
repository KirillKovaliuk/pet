import 'styled-components';

import { getDarkTheme } from './utils';

type TDarkTheme = ReturnType<typeof getDarkTheme>;

// eslint-disable-next-line @typescript-eslint/naming-convention
type CustomTheme = TDarkTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends CustomTheme {}
}
