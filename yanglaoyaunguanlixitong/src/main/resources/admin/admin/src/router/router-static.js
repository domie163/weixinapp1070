import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chuangwei from '@/views/modules/chuangwei/list'
    import chuangweiYuyue from '@/views/modules/chuangweiYuyue/list'
    import chuyaun from '@/views/modules/chuyaun/list'
    import diaodong from '@/views/modules/diaodong/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangjian from '@/views/modules/fangjian/list'
    import gonggao from '@/views/modules/gonggao/list'
    import hugong from '@/views/modules/hugong/list'
    import jiashu from '@/views/modules/jiashu/list'
    import jilu from '@/views/modules/jilu/list'
    import laoren from '@/views/modules/laoren/list'
    import laorenqingjia from '@/views/modules/laorenqingjia/list'
    import lizhi from '@/views/modules/lizhi/list'
    import qingjia from '@/views/modules/qingjia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChuangwei from '@/views/modules/dictionaryChuangwei/list'
    import dictionaryChuangweiYuyueYesno from '@/views/modules/dictionaryChuangweiYuyueYesno/list'
    import dictionaryChuyaunYesno from '@/views/modules/dictionaryChuyaunYesno/list'
    import dictionaryDiaodongYesno from '@/views/modules/dictionaryDiaodongYesno/list'
    import dictionaryFangjian from '@/views/modules/dictionaryFangjian/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHugongYesno from '@/views/modules/dictionaryHugongYesno/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryLaorenqingjiaYesno from '@/views/modules/dictionaryLaorenqingjiaYesno/list'
    import dictionaryLizhiYesno from '@/views/modules/dictionaryLizhiYesno/list'
    import dictionaryQingjiaYesno from '@/views/modules/dictionaryQingjiaYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYonghu from '@/views/modules/dictionaryYonghu/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChuangwei',
        name: '床位类型',
        component: dictionaryChuangwei
    }
    ,{
        path: '/dictionaryChuangweiYuyueYesno',
        name: '报名状态',
        component: dictionaryChuangweiYuyueYesno
    }
    ,{
        path: '/dictionaryChuyaunYesno',
        name: '报名状态',
        component: dictionaryChuyaunYesno
    }
    ,{
        path: '/dictionaryDiaodongYesno',
        name: '报名状态',
        component: dictionaryDiaodongYesno
    }
    ,{
        path: '/dictionaryFangjian',
        name: '房间类型',
        component: dictionaryFangjian
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHugongYesno',
        name: '报名状态',
        component: dictionaryHugongYesno
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryLaorenqingjiaYesno',
        name: '报名状态',
        component: dictionaryLaorenqingjiaYesno
    }
    ,{
        path: '/dictionaryLizhiYesno',
        name: '报名状态',
        component: dictionaryLizhiYesno
    }
    ,{
        path: '/dictionaryQingjiaYesno',
        name: '报名状态',
        component: dictionaryQingjiaYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYonghu',
        name: '护工等级',
        component: dictionaryYonghu
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chuangwei',
        name: '床位',
        component: chuangwei
      }
    ,{
        path: '/chuangweiYuyue',
        name: '床位调动申请',
        component: chuangweiYuyue
      }
    ,{
        path: '/chuyaun',
        name: '出院申请',
        component: chuyaun
      }
    ,{
        path: '/diaodong',
        name: '调动申请',
        component: diaodong
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangjian',
        name: '房间',
        component: fangjian
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/hugong',
        name: '护工更换申请',
        component: hugong
      }
    ,{
        path: '/jiashu',
        name: '家属',
        component: jiashu
      }
    ,{
        path: '/jilu',
        name: '健康信息',
        component: jilu
      }
    ,{
        path: '/laoren',
        name: '老人',
        component: laoren
      }
    ,{
        path: '/laorenqingjia',
        name: '老人请假申请',
        component: laorenqingjia
      }
    ,{
        path: '/lizhi',
        name: '离职申请',
        component: lizhi
      }
    ,{
        path: '/qingjia',
        name: '请假申请',
        component: qingjia
      }
    ,{
        path: '/yonghu',
        name: '护工',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
