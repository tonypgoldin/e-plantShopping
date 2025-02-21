const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
  transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    
    testEnvironment: "jsdom",
    globals: {"IS_REACT_ACT_ENVIRONMENT": true },

    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};
