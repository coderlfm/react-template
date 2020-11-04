import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'



/**
 * 动态引入组件reducer
 * 
 */
const reducers = {};
const pageDirs = require.context('@/pages', true, /reducer\.js$/)
const componentDirs = require.context('@/components', true, /reducer\.js$/)

pageDirs.keys().forEach((dirPath) => {
    const dirName = dirPath.split('./')[1].split('/')[0];
    dirPath = dirPath.substring(1, dirPath.length)
  
    reducers[dirName] = require('../pages' + dirPath).default
})

componentDirs.keys().forEach((dirPath) => {
    const dirName = dirPath.split('./')[1].split('/')[0];
    dirPath = dirPath.substring(1, dirPath.length)
  
    reducers[dirName] = require('../components' + dirPath).default
})




const reducer = combineReducers(reducers)

export default reducer;
