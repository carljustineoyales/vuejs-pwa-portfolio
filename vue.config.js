module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: "vuejs-pwa-portfolio",
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js",
      // ...other Workbox options...
    },
  },
};
