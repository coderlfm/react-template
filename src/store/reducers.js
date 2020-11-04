import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'



/**
 * 动态引入组件reducer
 * 
 */
const reducers = {};
const dirs = require.context('@/pages', true, /reducer\.js$/)

dirs.keys().forEach((dirPath) => {
    const dirName = dirPath.split('./')[1].split('/')[0];
    dirPath = dirPath.substring(1, dirPath.length)
    // console.log(dirPath);
    reducers[dirName] = require('../pages' + dirPath).default
})




const reducer = combineReducers(reducers)

export default reducer;
