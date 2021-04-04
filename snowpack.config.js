import envJs from './env';

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
  buildOptions: {
    baseUrl: './',
    out: 'build',
  },
  env: {
    EMAILJS_TEMPLATE_ID: envJs.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: envJs.EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID: envJs.EMAILJS_SERVICE_ID,
  },
  optimize: {
    minify: true,
    bundle: true,
    splitting: true,
    treeshake: true,
    target: 'es2018',
  },
};
