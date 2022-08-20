module.exports = {
  plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    // require('postcss-preset-env')({
    //   stage: 3,
    //   features: { 'nesting-rules': false },
    // }),
    require('autoprefixer'),
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ],
}
