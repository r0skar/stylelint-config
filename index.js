module.exports= {
  root: true,

  // Not sure why, but sometimes stylelint tries to take over script files.
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

  extends: [
    // https://github.com/airbnb/css
    'stylelint-config-airbnb',
    // https://github.com/pascalduez/stylelint-config-css-modules
    'stylelint-config-css-modules',
    // https://github.com/bjankord/stylelint-config-sass-guidelines
    'stylelint-config-sass-guidelines'
  ],

  rules: {
    // Disables ordering of declarations, but keeps prop order alphabetical.
    'order/order': null
  }
}
