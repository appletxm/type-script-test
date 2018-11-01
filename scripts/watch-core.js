const chokidar = require('chokidar')
const chalk = require('chalk')
const {
  exec
} = require('child_process')

let watcher

module.exports = {
  start(watchFolderPath) {
    // console.info('====', watchPath, env)

    // watcher = fs.watch(watchPath, (eventType, filename) => {
    //   console.log(`event type is: ${eventType}`)
    //   if (filename) {
    //     console.log(`filename provided: ${filename}`)
    //   } else {
    //     console.log('filename not provided')
    //   }
    // })

    watcher = chokidar.watch(watchFolderPath, {
      ignored: /(^|[\/\\])\../,
      persistent: true,
      ignoreInitial: true,
      depth: 99
    })
    watcher
      .on('add', (path) => {
        this.handleAddFiles(path)
      })
      .on('change', (path) => {
        this.handleFileChange(path)
      })
      .on('unlink', (path) => {
        this.handleRemoveFile(path)
      })
      .on('addDir', (path) => {
        this.handleAddDir(path)
      })
      .on('unlinkDir', (path) => {
        this.handleRemoveDir(path)
      })
      .on('error', (error) => {
        this.handleError(error)
      })
      .on('ready', () => {
        console.log(chalk.magenta('watcher is started'))
      })
      .on('raw', (event, path, details) => {
        console.log('Raw event info:', event, path, details)
      })
  },

  handleAddFiles(path) {
    console.log(chalk.green('File', path, 'has been added'))
    this.triggerTsCompiker(path)
  },

  handleFileChange(path) {
    console.log(chalk.cyan('File', path, 'has been changed'))
    this.triggerTsCompiker(path)
  },

  handleRemoveFile(path) {
    console.log(chalk.yellow('File', path, 'has been removed'))
    // this.triggerTsCompiker(path)
  },

  handleAddDir(path) {
    console.log(chalk.green('Folder', path, 'has been added'))
    // this.triggerTsCompiker(path)
  },

  handleRemoveDir(path) {
    console.log(chalk.yellow('Folder', path, 'has been removed'))
  },

  handleError(error) {
    console.error('Error happened', error)
  },

  triggerTsCompiker() {
    exec('npm run tsc', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return;
      } else if (stderr) {
        console.log(`stderr: ${stderr}`)
      } else {
        console.log(chalk.green(`${stdout}`))
      }
    })
  },

  destroyed() {
    // watcher.unwatch(watchPath)
    watcher.close()
  }
}
