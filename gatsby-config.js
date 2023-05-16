module.exports = {
    plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-typescript"
    ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:4000",
  },
  };
  