const watchCore = require('./watch-core')
const path = require('path')
const watchPath = path.resolve(__dirname, '../src')

watchCore.start(watchPath)