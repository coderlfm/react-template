
import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'

// import { reducer as recommendsReducer } from '@/pages/discover/children-pages/recommends/store'
import   HomeReducer  from '@/pages/home/store'
// import { reducer as layoutReducer } from '@/components/layout/store'

console.log(HomeReducer);

const reducer = combineReducers({
    home: HomeReducer,
    // layout:layoutReducer
})

export default reducer;
