/**
 * Created by Andste on 2018/7/2.
 * base    : 基础业务API
 * buyer   : 买家API
 * seller  : 商家中心API
 * admin   ：后台管理API
 */

const env = process.server
  ? process.env
  : (global.window ? window.__NUXT__.state.env : {})

module.exports = {
  // 开发环境
  dev: {
    base  : 'http://127.0.0.1:7000/base-api',
    buyer : 'http://127.0.0.1:7002/buyer-api',
    seller: 'http://127.0.0.1:7003/seller-api',
    admin : 'http://127.0.0.1:7004/manager-api'
  },
  // 生产环境
  pro: {
    base  : env.API_BASE || 'http://javashop7.s1.natapp.cc/base-api',
    buyer : env.API_BUYER || 'http://javashop7.s1.natapp.cc/buyer-api',
    seller: env.API_SELLER || 'http://javashop7.s1.natapp.cc/seller-api',
    admin : env.API_ADMIN || 'http://javashop7.s1.natapp.cc/manager-api'
  }
}
