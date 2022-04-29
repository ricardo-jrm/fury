<div align="center">

# 🔥 `@ricardojrmcom/fury`

<b>React Web UI</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/fury/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/fury?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/fury?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/fury?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```tsx
npm install @ricardojrmcom/fury

yarn add @ricardojrmcom/fury
```

<br />

### <b>Usage</b>

```tsx
import { useFury, FuryProvider, FuryRecord } from '@ricardojrmcom/fury';

// provider
const exampleFury: FuryRecord = {
  fury1: {
    typography: {
      h1: {
        fontSize: '100px',
        color: 'red',
      },
    },
  },
  fury2: {
    typography: {
      h1: {
        fontSize: '75px',
        color: 'green',
      },
    },
  },
};

<FuryProvider fury={exampleFury} furyDefault="fury1">
  {...}
</FuryProvider>


// hook
const { furyActive, furyActiveId, furySetById } = useFury();
```

<br />

### <b>Scripts</b>

```tsx
// install deps
yarn install

// run lint
yarn lint

// run unit tests
yarn test

// run storybook
yarn sb
```

<br />

### <b>Project</b>

- [Project Page](https://l1b3r.notion.site/fury-5acb71cd3a0446a0a520bfa4cf853081)
- [Source Code](https://github.com/ricardojrmcom/fury)
- [Releases Page](https://github.com/ricardojrmcom/fury/releases)

<br />

### <b>Project Dependencies</b>

- <b>TS Package Boilerplate: [🟪 @ricardojrmcom/nova](https://github.com/ricardojrmcom/nova)</b>
- <b>React Module Boilerplate: [🟣 @ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)</b>

<br />

### <b>Dev Dependencies</b>

- `Yarn`
- `Typescript`
- `React`
- `Material-UI`
- `Prettier`
- `ESLint`
- `Commit Lint`
- `Lint Staged`
- `Husky`
- `Jest`
- `Semantic Release`

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/fury/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
