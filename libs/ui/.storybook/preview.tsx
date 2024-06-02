import React, { Fragment } from 'react';

import { Preview } from '@storybook/react';
import { BRAND_COLORS, GlobalStyles, Theme, Typography } from '../src';
import { DocsContainer } from "@storybook/blocks";
import { themes } from '@storybook/theming';

import { Inter } from 'next/font/google';
import { useTheme } from '../src';
import { useTheme as useThemeSchema } from 'styled-components';

const EXCLUDE_STORY_DEFAULT_STYLES = ['introduction-welcome'];

const Container = ({
  children,
  context,
}) => {
  const { mode } = useTheme();
  const schema = useThemeSchema();

  const theme = {
    ...(mode === 'dark' ? themes.dark : themes.light),
    fontBase: `Inter, ${themes.dark.fontBase}`,
    appContentBg: schema.background.primary,
    textColor: schema.text.primary,
  };

  return (
    <DocsContainer theme={theme} context={context}>
      { children }
    </DocsContainer>
  );
}

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter-font',
});

const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Global theme mode for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Mode',
        icon: 'paintbrush',
        items: ['dark', 'light'],
        dynamicTitle: true,
      },
    },
    brandColor: {
      description: 'Brand color for components',
      defaultValue: 'blue-light',
      toolbar: {
        title: 'Brand color',
        icon: 'paintbrush',
        items: BRAND_COLORS,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { mode, brandColor } = context.globals;

      return (
        <Theme mode={mode} brandColor={brandColor}>
          <GlobalStyles />
            <main className={inter.className}>
              <Story />
            </main>
        </Theme>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        includeNames: true,
        order: [
          'Introduction', ['Welcome'],
          'Documentation', ['Design methodology', 'Folder structure', 'Code style', 'Libs and Tools', '*'],
          'Foundations', ['Theme', 'Palette', 'Shadows', 'Focus rings', 'Blurs', 'Spacing', '*'],
          'Elements', ['Typography', 'Button', 'Icon', '*'],
          'Components'
        ],
      },
    },
    docs: {
      components: {
        p: ({ children }) => {
          return (
            <p style={{ fontSize: "18px", lineHeight: "28px" }}>{children}</p>
          );
        },
        li: ({ children }) => {
          return (
            <li style={{ fontSize: "18px", lineHeight: "28px" }}>{children}</li>
          );
        }
      },
      container: ({ children, context }) => {
        const { 
          store: { globals: { globals: { mode, brandColor } } },
          attachedCSFFile,
        } = context;
        const { meta: { id } } = attachedCSFFile || { meta: {}};

        const ContainerWrapper = EXCLUDE_STORY_DEFAULT_STYLES.includes(id) ? Fragment : Container;

        return (
          <Theme mode={mode} brandColor={brandColor}>
            <GlobalStyles />
            <ContainerWrapper context={context}>
              <main className={inter.className}>
                {children}
              </main>
            </ContainerWrapper>
          </Theme>
        );
      },
    },
  },
};

export default preview;
