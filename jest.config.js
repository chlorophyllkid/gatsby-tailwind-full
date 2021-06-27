module.exports = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
  transform: {
    '^.+\\.js?$': `<rootDir>/.jest/preprocess.js`,
  },

  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(react)/)`],

  snapshotResolver: './.jest/snapshotResolver.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    './.jest/snapshotSerializers.js',
  ],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/mockFiles.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/.jest/mockStyles.js',
  },
}
