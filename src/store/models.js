const models = {};

const pageDirs = require.context('@/pages', true, /model\.js$/);

pageDirs.keys().forEach(dirPath => {
    const dirName = dirPath.split('./')[1].split('/')[0];
    dirPath = dirPath.substring(1, dirPath.length)
    models[dirName] = require('@/pages' + dirPath).default
})

export default models;