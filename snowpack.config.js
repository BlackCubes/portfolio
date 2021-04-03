module.exports = {
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'sass sass/main.scss:css/bundle/styles.min.css --no-source-map',
        watch:
          'sass --watch sass/main.scss:css/compile/styles.css --no-source-map',
      },
    ],
  ],
  devOptions: {
    port: 3000,
  },
};
