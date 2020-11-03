import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'



/**
 * 动态引入page下所有的子目录下的index.js
 * 所以此处组件应该避免使用index.js为文件名，请使用index.jsx 
 */
const reducers = {};
const dirs = require.context('@/pages', true, /index\.js$/)

dirs.keys().forEach((dirPath) => {
    const dirName = dirPath.split('./')[1].split('/')[0];
    dirPath = dirPath.substring(1, dirPath.length)
    reducers[dirName] = require('../pages' + dirPath).default
})




const reducer = combineReducers(reducers)

export default reducer;
