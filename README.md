<div align="center">

# 🔥 `@ricardo-jrm/fury`

<b>React Web UI</b>

![build](https://img.shields.io/github/workflow/status/ricardo-jrm/fury/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardo-jrm/fury?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardo-jrm/fury?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardo-jrm/fury?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardo-jrm/fury?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardo-jrm/fury

yarn add @ricardo-jrm/fury
```

<br />

### <b>Usage</b>

```ts
// app
import { FuryProvider, FuryThemes, FuryMetaRecord, useFury } from '@ricardo-jrm/fury';

const exampleMetas: FuryMetaRecord = {
  meta1: { name: 'Meta 1' },
  meta2: { name: 'Meta 2' },
};

const exampleThemes: FuryThemes = {
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
};

<FuryProvider
  themes={exampleThemes}
  themesDefault="theme1"
  metas={exampleMetas}
  metasDefault="default"
>
  {...}
</FuryProvider>


// component
const { themeActive, themeSetById, metaActive, metaSetById } = useFury();
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardo-jrm/fury/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

Bootstrapped with 🟣[@ricardo-jrm/supernova](https://github.com/ricardo-jrm/supernova)

<br />
