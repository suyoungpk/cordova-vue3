// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import common from './common'
import login from './login'

const router = createRouter({
  scrollBehavior() {
    return ({x: 0, y: 0})
  },
  history: createWebHistory(),
  routes:common,
});
router.addRoute(login)
//필요할 경우
let isAuthenticated = true// 권한여부 check
router.beforeEach(() => isAuthenticated);

export default router
