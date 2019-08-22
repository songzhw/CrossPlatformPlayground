module.exports = {
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/enzyme.setup.js"],
  setupFiles: ["<rootDir>/jest.config.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.js",
    "\\.(css|less)$": "<rootDir>/fileMock.js"
  }
};
