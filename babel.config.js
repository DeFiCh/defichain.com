module.exports = function (api) {
  api.cache(true);

  if (process.env.NODE_ENV === "development") {
    console.log("Instrumenting for Development");

    return {
      presets: ["next/babel"],
      plugins: [],
    };
  }

  if (process.env.CYPRESS === "true") {
    console.log("Instrumenting for Cypress E2E");

    return {
      presets: ["next/babel"],
      plugins: ["istanbul"],
    };
  }

  return {
    presets: ["next/babel"],
    plugins: ["babel-plugin-jsx-remove-data-test-id"],
  };
};
