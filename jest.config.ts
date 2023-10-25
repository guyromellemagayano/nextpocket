import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
  dir: './'
})

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/'
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
    '<rootDir>/src/components/**/*.[jt]sx?$',
    '<rootDir>/src/contexts/**/*.[jt]sx?$',
    '<rootDir>/src/helpers/**/*.[jt]sx?$',
    '<rootDir>/src/hooks/**/*.[jt]sx?$',
    '<rootDir>/src/lib/**/*.[jt]sx?$',
    '<rootDir>/src/pages/**/*.[jt]sx?$',
    '<rootDir>/src/utils/**/*.[jt]sx?$'
  ]
}

export default createJestConfig(config)
