import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom'

const createRoutes = (routes) => {
    return routes.map(item => {
        if (item.children && item.children.length) {
            return createRoutes(item.children)
        } else if (item.componentPath) {
            return (<Route path={item.path} render={(routerData) => {
                const ComponentName = lazy(() => import(`@/${item.componentPath}`));
                return <Suspense fallback={<div>Loading...</div>}><ComponentName {...routerData}></ComponentName></Suspense>
            }
            } key={item.path} exact />)
        } else {
            return null;
        }
    })

}

/**
 * 创建路由hooks
 * @param {Array} routes 
 */
const useCreateRoutes = (routes) => createRoutes(routes)


export default useCreateRoutes

