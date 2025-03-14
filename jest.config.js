module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'bun',
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    coveragePathIgnorePatterns: ['/node_modules/', '/lib/'],
};
