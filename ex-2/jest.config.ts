import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config: import("jest").Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
};

module.exports = createJestConfig(config);
