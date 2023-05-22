module.exports = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/tokens/scss/',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/tokens/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    "ts": {
      "transformGroup": "js",
      buildPath: 'dist/tokens/js/',
      "files": [
        {
          name: 'tokens',
          "format": "javascript/module",
          "destination": "tokens.js"
        },
        {
          name: 'tokens',
          "format": "typescript/module-declarations",
          "destination": "tokens.d.ts"
        }
      ]
    },
    "ts-src": {
      "transformGroup": "js",
      buildPath: 'src/tokens/js/',
      "files": [
        {
          name: 'tokens',
          "format": "javascript/module",
          "destination": "tokens.js"
        },
        {
          name: 'tokens',
          "format": "typescript/module-declarations",
          "destination": "tokens.d.ts"
        }
      ]
    },
  },
};
