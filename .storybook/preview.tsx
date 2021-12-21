import { FuryProvider, FuryThemes, FuryMetaRecord } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const tempMetas: FuryMetaRecord = {
  default: { name: 'Default' },
  meta1: { name: 'Meta 1' },
  meta2: { name: 'Meta 2' },
};

const tempThemes: FuryThemes = {
  theme1: {
    typography: {
      body1: {
        fontSize: '100px',
        color: 'red',
      },
    },
  },
  theme2: {
    typography: {
      body1: {
        fontSize: '75px',
        color: 'green',
      },
    },
  },
  theme3: {
    typography: {
      body1: {
        fontSize: '50px',
        color: 'blue',
      },
    },
  },
  theme4: {
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
    <FuryProvider
      themes={tempThemes}
      themesDefault="theme1"
      metas={tempMetas}
      metasDefault="default"
    >
      {Story()}
    </FuryProvider>
  ),
];
