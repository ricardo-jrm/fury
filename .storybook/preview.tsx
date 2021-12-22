import { FuryProvider, FuryRecord } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const exampleFury: FuryRecord = {
  fury1: {
    typography: {
      body1: {
        fontSize: '100px',
        color: 'red',
      },
    },
  },
  fury2: {
    typography: {
      body1: {
        fontSize: '75px',
        color: 'green',
      },
    },
  },
  fury3: {
    typography: {
      body1: {
        fontSize: '50px',
        color: 'blue',
      },
    },
  },
  fury4: {
    typography: {
      body1: {
        fontSize: '25px',
        color: 'brown',
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <FuryProvider fury={exampleFury} furyDefault="fury1">
      {Story()}
    </FuryProvider>
  ),
];
