import purgecssModule from '@fullhuman/postcss-purgecss'
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const purgecss = purgecssModule.default

export default {
  plugins: [
    postcssImport,
    postcssPresetEnv({
      stage: 3,
      autoprefixer: {},
      features: {
        'custom-properties': false
      }
    }),
    ...(IS_PRODUCTION
      ? [
          cssnano(),
          purgecss({
            content: ['./src/**/*.{astro,svelte,html,mdx,md}'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ]
      : [])
  ]
}
