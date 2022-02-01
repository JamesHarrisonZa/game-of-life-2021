# Game of life 2021

Playground for me to learn some new tech

## Getting started

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

## [NextJS](https://nextjs.org/learn)

### Advantages

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
