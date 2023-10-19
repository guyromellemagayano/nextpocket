import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
  dir: './',
})

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

const config: Config = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    ...moduleNameMapper,
  },
  transform: { '\\.[jt]sx?$': 'ts-jest' },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: ['node_modules/(?!(jose)/)'],
  collectCoverage: true,
  collectCoverageFrom: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './helpers/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './providers/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
}

module.exports = createJestConfig(config)
