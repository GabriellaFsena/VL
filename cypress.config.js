const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://vida-leve.vercel.app/'
  },
});
