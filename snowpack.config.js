module.exports = {
  mount: {
    public: '/',
    src: '/',
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd:
          'sass public/sass/main.scss:public/css/bundle/styles.min.css --no-source-map',
        watch:
          'sass --watch public/sass/main.scss:public/css/compile/styles.css --no-source-map',
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
  optimize: {
    minify: true,
    bundle: true,
    splitting: true,
    treeshake: true,
    target: 'es2018',
  },
};
