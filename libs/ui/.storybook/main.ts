import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.overview.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../src/assets'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Overview',
  },
  webpackFinal: (config) => {
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg');
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    if(config && config.output && config.output.publicPath) {
      config.output.publicPath = '/';
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: (config) => {
    return ({
      ...config,
      PUBLIC_URL: "/",
    });
  },
};

export default config;
