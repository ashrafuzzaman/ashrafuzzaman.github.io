import createCache from '@emotion/cache';

/** @type {import('@emotion/cache').Options} */
export const cacheProps = {
  key: 'mui',
  prepend: true,
};

/** @type {import("@emotion/cache").EmotionCache | undefined} */
export let muiCache;

export const makeMuiCache = () => {
  if (!muiCache) {
    muiCache = createCache(cacheProps);
  }

  return muiCache;
};
