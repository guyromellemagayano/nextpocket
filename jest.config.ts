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
  moduleNameMapper,
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  transformIgnorePatterns: ['node_modules/(?!(jose)/)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.[jt]sx?$',
    '<rootDir>/components/**/*.[jt]sx?$',
    '<rootDir>/helpers/**/*.[jt]sx?$',
    '<rootDir>/hooks/**/*.[jt]sx?$',
    '<rootDir>/lib/**/*.[jt]sx?$',
    '<rootDir>/contexts/**/*.[jt]sx?$',
    '<rootDir>/utils/**/*.[jt]sx?$',
  ],
}

export default createJestConfig(config)
