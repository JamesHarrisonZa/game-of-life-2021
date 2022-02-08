# Game of life 2022

# Purpose

- Explore and learn some cool new tech.
- Have fun.
- Feed unhealthy fixation of building the most enterprise level game of life.

# Getting started

```bash
# Install packages
npm ci

# Install husky
npm run prepare

# Run tests
npm test

# Run the app
npm run dev
```

# New cool tech

<a name="website">[<img src="./public/images/tech/next-js.svg" height="100px" />](https://nextjs.org/learn)</a>

- Simple client side navigation/routing. (Avoiding page refresh)
- Code splitting & prefetching
  - Each page only loads what’s necessary
    - Homepage loads quickly
    - Pages become isolated. (If one page throws an error, the rest of the application would still work)
  - Automatically prefetches the code for the linked page in the background
    - The next page transition will be near-instant.
- `<Image>` component
  - Ensuring they are responsive on different screen sizes
  - [Optimised](https://nextjs.org/docs/basic-features/image-optimization)
  - Lazy loaded by default and load when they enter the viewport.

<a name="website">[<img src="./public/images/tech/chakra-ui.svg" height="100px" />](https://chakra-ui.com/)</a>

- Simple, modular and accessible component library

# Familiar tech used

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

<img src="./public/images/tech/react.svg" height="100px" /> 
<img src="./public/images/tech/jest.svg" height="100px" />
<img src="./public/images/tech/type-script.svg" height="100px" />
<img src="./public/images/tech/eslint.svg" height="100px" />
<img src="./public/images/tech/prettier.svg" height="100px" />
