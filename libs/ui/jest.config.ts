/* eslint-disable */
export default {
  displayName: 'ui',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ["../../__mocks__/jest/setupTests.js"],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    "\\.svg$": "../../__mocks__/jest/svgTransformer.js"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui',
};
