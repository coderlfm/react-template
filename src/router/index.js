import { createRouters } from '@/utils/utils';
/**
 * 初始化默认菜单，可根据后端返回的menu的来动态渲染菜单
 * 此处componentPath 为字符串，可动态渲染
 * 设置children 和 key的原因为需要做树形控件的选择
 * 
 */

/**
       path: "/home",  // 路由path
       key: "/home",   // 服务器中的key、此处项目设计时未做好设计，因此前端key和后端key不一致，此key用来tree树形菜单选中
       title: '首页',   // tree树形菜单中的title
       icon: 'HomeOutlined', //左侧导航菜单中的icon
       componentPath: "pages/home/statistics", //组件的path路径
       exact: true,    // 是否精准匹配路由
       children:[      // 二级导航
           {
               path: '/home/promotion',
               key: '/home/promotion',
               disabled: true,     // 不可取消勾选
               permanent: true,    // 默认菜单，常驻
               title: '我的推广',
               icon: 'RiseOutlined',
               componentPath: 'pages/home/promotion'
           }
       ]    
 */

const files = require.context('@/pages', true, /index\.jsx/);
const routers = createRouters(files);
// const routers = files.keys().map(item => {
//     // console.log(item);
//     // console.log(item.replace('./', '').replace('/index.jsx', ''));

//     const path = '/' + item.replace('./', '').replace('/index.jsx', '');
//     const componentPath = 'pages' + item.replace('.', '');
//     return {
//         path,
//         key: path,
//         title: '首页',
//         icon: 'HomeOutlined',
//         componentPath,
//         exact: true,
//         children: []
//     }
// })

// console.log(routers);

export default function routes() {
    return routers
    // return [
    //     {
    //         path: "/",
    //         key: "/",
    //         title: '',
    //         icon: 'HomeOutlined',
    //         componentPath: "pages/home",
    //         component: "pages/home",
    //         exact: true,
    //     },
    //     {
    //         path: "/home",
    //         key: "/home",
    //         title: '首页',
    //         icon: 'HomeOutlined',
    //         componentPath: "pages/home",
    //         exact: true,
    //         children: []
    //     },
    //     {
    //         path: '/profile',
    //         key: '/profile',
    //         title: '我的',
    //         icon: 'TrophyOutlined',
    //         componentPath: 'pages/profile',
    //         exact: true,
    //         children: []
    //     },
    // ]
}
