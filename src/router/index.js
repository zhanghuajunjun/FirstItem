import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/out',
        name: 'Out',
        component: () => import('../views/out/Out'),
        meta: {
          title: '退出系统'
        }
      },
      {
        path: '/paging',
        name: 'Paging',
        component: () => import('../views/paging/Paging'),
        meta: {
          title: '分页表格'
        }
      },
      {
        path: '/released',
        name: 'Released',
        component: () => import('../views/released/Released'),
        meta: {
          title: '已发表'
        }
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('../views/Statistics/Statistics'),
        meta: {
          title: '统计'
        }
      },
      {
        path: '/publish',
        name: 'Publish',
        component: () => import('../views/publish/Publish'),
        meta: {
          title: '发表文章'
        }
      },
      {
        path: '/tab',
        name: ' Tab',
        component: () => import('../views/tab/Tab'),
        meta: {
          title: '标签页'
        }
      },
      {
        path: '/exportEX',
        name: 'ExportEX',
        component: () => import('../views/exportEX/ExportEX'),
        meta: {
          title: '导出excel'
        }
      },
      {
        path: '/uploadImg',
        name: 'UploadImg',
        component: () => import('../views/uploadImg/UploadImg'),
        meta: {
          title: '图片上传'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let username = localStorage.getItem('user')
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    username ? next() : next('/login')
  }
})
export default router
